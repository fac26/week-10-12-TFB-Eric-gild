import Layout from 'components/Layout';
import Button from 'components/Button';
import airtableModule from 'utils/airtable';
import ManageStockCard from 'components/ManageStockCard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const donor = 'pret';
  const menu = await airtableModule.getRecords(donor);
  if (!menu) {
    return {
      notFound: true,
    };
  }
  if (menu) {
    return {
      props: {
        menu,
      },
    };
  }
}

export default function ManageFood({ menu }) {
  const [items, setItems] = useState([]);
  const pageTitle = 'Manage Food';
  const router = useRouter();

  useEffect(() => {
    const newItems = menu.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        quantity: item.quantity,
        image: item.image,
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
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          What’s available at Pret, Holloway Road?
        </p>
      </div>
      <div className='flex flex-col m-10 items-center'>
        <Button buttonName={'Save'} ButtonOnClick={handleSaveClick} />
      </div>
      <div className='flex flex-col m-4 items-center gap-4 mb-40'>
        {items ? (
          items.map((item) => (
            <>
              <ManageStockCard
                key={item.fields.id}
                item={item}
                quantity={item.fields.quantity}
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
