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
    console.log(menu);
    return {
      props: {
        menu,
      },
    };
  }
}

export default function ManageFood({ menu }) {
  console.log(menu);
  const [items, setItems] = useState(() =>
    menu.reduce(
      (acc, item) => ({
        ...acc,
        [item.ID]: { name: item.Name, quantity: item.Quantity },
      }),
      {}
    )
  );
  const pageTitle = 'Manage Food';

  useEffect(() => {
    localStorage.setItem(
      'menu-items',
      JSON.stringify(
        Object.values(items).map(({ name, quantity }) => ({ name, quantity }))
      )
    );
  }, [items]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems((prevItems) => ({
      ...prevItems,
      [itemId]: {
        ...prevItems[itemId],
        quantity: newQuantity,
      },
    }));

    localStorage.setItem(
      'menu-items',
      JSON.stringify(
        Object.values(prevItems).map(({ name, quantity }) => ({
          name,
          quantity,
        }))
      )
    );
  };

  const handleSaveClick = () => {
    airtableModule.updateRecords('pret', items);
  };

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          What’s available at Pret, Holloway Road?
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4'>
        {menu ? (
          menu.map((item) => (
            <ManageStockCard
              key={item.ID}
              item={item}
              quantity={items[item.ID].quantity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(item.ID, newQuantity)
              }
            />
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
