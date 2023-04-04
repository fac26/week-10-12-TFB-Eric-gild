import Layout from 'components/Layout';
import ButtonLink from 'components/ButtonLink';
import airtableModule from 'utils/airtable';
import ManageStockCard from 'components/ManageStockCard';
import Filter from 'components/Filter';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const donor = 'pret';
  const menu = await airtableModule.getRecords(donor);
  const filters = await airtableModule.getRecords('menuCategories');
  if (!menu) {
    return {
      notFound: true,
    };
  }
  if (menu && filters) {
    return {
      props: {
        filters,
        menu,
      },
    };
  }
}

export default function ManageFood({ filters, menu }) {
  const [items, setItems] = useState([]);
  const [foodFilter, setFoodFilter] = useState({ Filter: 'All' });
  const pageTitle = 'Manage Food';
  const router = useRouter();

  useEffect(() => {
    const newItems = menu.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        quantity: item.quantity,
        image: item.image,
        menuCategories: item.menuCategories,
      },
    }));
    setItems(newItems);
    localStorage.setItem('menu-items', JSON.stringify(newItems)); // add items to local storage
  }, [menu]);

  useEffect(() => {
    localStorage.setItem('menu-items', JSON.stringify(items));
  }, [items]);

  const handleSaveClick = () => {
    const menuItems = JSON.parse(localStorage.getItem('menu-items'));
    airtableModule.updateRecords('pret', menuItems);
    router.push('/available-food');
  };

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor3 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          What’s available at Pret, Holloway Road?
        </p>
      </div>
      <Filter
        foodFilter={foodFilter}
        setFoodFilter={setFoodFilter}
        filters={filters}
      />
      <div className='flex flex-col m-10 items-center'>
        <ButtonLink buttonName={'Save'} ButtonOnClick={handleSaveClick} />
      </div>
      <div className='flex flex-col m-4 items-center gap-4 mb-40'>
        {items ? (
          items.map((item) => (
            <>
              <ManageStockCard
                key={item.fields.id}
                item={item}
                quantity={item.fields.quantity}
                filters={filters}
                foodFilter={foodFilter}
              />
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
