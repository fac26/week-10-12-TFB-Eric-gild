import Layout from 'components/Layout';
import ButtonQuantity from 'components/ButtonQuantity';
import airtableModule from 'utils/airtable';
import ManageStockCard from 'components/ManageStockCard';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const newItems = menu.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        quantity: item.quantity,
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
  };

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          What’s available at Pret, Holloway Road?
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4'>
        {items ? (
          items.map((item) => (
            <>
              <ManageStockCard
                key={item.fields.id}
                item={item}
                //setItems={setItems}
                quantity={item.fields.quantity} //pos remove
              />
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='flex flex-col mb-40 mt-20 items-center'>
        <ButtonQuantity buttonName={'Save'} onClick={handleSaveClick} />
      </div>
    </Layout>
  );
}
