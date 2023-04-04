import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import BusinessAccountDetails from 'components/BusinessAccountDetails';
import React from 'react';

export async function getServerSideProps() {
  const collaborators = await airtableModule.getRecords('Collaborators');
  if (!collaborators) {
    return {
      notFound: true,
    };
  }
  if (collaborators) {
    return {
      props: {
        collaborators,
      },
    };
  }
}

export default function VendorDetails({ collaborators }) {
  const pageTitle = 'Vendor account';
  const supabase = useSupabaseClient();
  const session = useSession();
  const collaborator = collaborators.find(
    (collaborator) => collaborator.Email === session?.user?.email
  );
  console.log('collaborators', collaborators);
  console.log('collaborator', collaborator);

  // console.log(collaborator.Name);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          {collaborator.Name}
        </p>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          {collaborator.Address}
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4'></div>
      <BusinessAccountDetails />
    </Layout>
  );
}
