import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import BusinessAccountDetails from 'components/BusinessAccountDetails';

export async function getServerSideProps() {
  const collaborator =
    '{ "Name": "Pret", "Address": "271 Holloway Road, London N7 8JL" }'; // Replace with actual collaborator data
  const { Name, Address } = JSON.parse(collaborator);
  const name = await airtableModule.getRecords({
    filterByFormula: `{Name} = '${Name}'`,
  });
  const address = await airtableModule.getRecords({
    filterByFormula: `{Address} = '${Address}'`,
  });

  if (!name || name.length === 0 || !address || address.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      name: name[0],
      address: address[0],
    },
  };
}

export default function VendorAccountDetails({ name, address }) {
  const [nameFields, setNameFields] = useState({});
  const [addressFields, setAddressFields] = useState({});
  const pageTitle = 'Business Account Page';

  useEffect(() => {
    setNameFields(name.fields);
    setAddressFields(address.fields);
  }, [name, address]);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          {nameFields.name}
        </p>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          {addressFields.name}
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4'></div>
      <BusinessAccountDetails />
    </Layout>
  );
}
