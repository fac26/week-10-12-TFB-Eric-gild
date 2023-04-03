import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import BusinessAccountDetails from 'components/BusinessAccountDetails';

export async function getServerSideProps() {
  const description = await airtableModule.getRecords('Collaborators');
  if (!description) {
    return {
      notFound: true,
    };
  }
  if (description) {
    return {
      props: {
        description,
      },
    };
  }
}

export default function VendorAccountDetails({ description }) {
  const [items, setItems] = useState([]);
  const pageTitle = 'Business Account Page';

  useEffect(() => {
    const newItems = description.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        quantity: item.quantity,
      },
    }));
    setItems(newItems);
  }, [description]);

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
      <BusinessAccountDetails />
    </Layout>
  );
}
