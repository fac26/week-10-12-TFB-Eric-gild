import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
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

export default function VendorAccountDetails({ menu }) {
  const [items, setItems] = useState([]);
  const pageTitle = 'Business Account Page';

  useEffect(() => {
    const newItems = menu.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        quantity: item.quantity,
      },
    }));
    setItems(newItems);
  }, [menu]);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          Pret
        </p>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          271 Holloway Road, London N7 8JL
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4'></div>
    </Layout>
  );
}
