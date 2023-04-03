import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import BusinessAccountDetails from 'components/BusinessAccountDetails';

export async function getServerSideProps() {
  const name = await airtableModule.getRecords('Collaborators');
  if (!name) {
    return {
      notFound: true,
    };
  }
  if (name) {
    return {
      props: {
        name,
      },
    };
  }
}

export default function VendorAccountDetails({ name }) {
  const [items, setItems] = useState([]);
  const pageTitle = 'Business Account Page';

  useEffect(() => {
    const newItems = name.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
      },
    }));
    setItems(newItems);
  }, [name]);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          [name]
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
