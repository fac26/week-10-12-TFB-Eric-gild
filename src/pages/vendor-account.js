import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import React from 'react';
import ButtonSmall from '@components/ButtonSmall';

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

  return (
    collaborator && (
      <>
        <Layout pageTitle={pageTitle} isBusinessPage>
          <div className='flex flex-col m-4 items-center'>
            <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
              Name: {collaborator.Name}
            </p>
            <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
              Address: {collaborator.Address}
            </p>
          </div>
          <div className='flex flex-col m-4 items-center gap-4'></div>
          <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg mb-40'>
            <h3 className='text-4xl'>Description</h3>
            <p className='text-l font-sans overflow-hidden'>
              <div>Description: {collaborator.Description}</div>
            </p>
            <div className='flex flex-col mb-10 mt-10 items-center'>
              <div className='ml-auto'>
                <ButtonSmall buttonName={'Edit'} buttonLink='/' />
              </div>
            </div>
            <h3 className='text-4xl'>Address</h3>
            <p className='text-l font-sans overflow-hidden'>
              Address: {collaborator.Address}
            </p>
            <div className='flex flex-col mb-10 mt-10 items-center'>
              <div className='ml-auto'>
                <ButtonSmall buttonName={'Edit'} buttonLink='/' />
              </div>
            </div>
            <h3 className='text-4xl'>Frequently Asked Qs</h3>
            <p className='text-l font-sans overflow-hidden'>Add FAQs here</p>
            <div className='flex flex-col mb-10 mt-10 items-center'>
              <div className='ml-auto'>
                <ButtonSmall buttonName={'Edit'} buttonLink='/' />
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  );
}
