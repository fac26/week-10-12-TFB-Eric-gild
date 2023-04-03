import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

// import BusinessAccountDetails from 'components/BusinessAccountDetails';
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
  const session = useSession();
  const supabase = useSupabaseClient();
  const [collaborator, setCollaborator] = useState(null);
  useEffect(() => {
    if (collaborators && session && session.user) {
      const foundCollaborator = collaborators.find(
        (collaborator) => collaborator.Name === session.user.name
      );
      setCollaborator(foundCollaborator || {});
    }
  }, [collaborators, session]);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      {collaborator && collaborator.Name ? (
        <div>
          <p>Collaborator: {collaborator.Name}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          {nameFields.name}
        </p>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          {addressFields.name}
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4'></div>
      <BusinessAccountDetails /> */}
    </Layout>
  );
}
