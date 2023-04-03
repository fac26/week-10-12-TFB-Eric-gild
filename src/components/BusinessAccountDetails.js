import ButtonSmall from '@components/ButtonSmall';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { useState } from 'react';
import { useEffect } from 'react';
import airtableModule from 'utils/airtable';

export default function BusinessAccountDetails(props) {
  // const { Description, Address } = collaborator ? JSON.parse(collaborator) : {};
  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <h3 className='text-4xl'>Description</h3>
      <p className='text-l font-sans overflow-hidden'>
        Pret a Manger is a sandwich shop serving soup, sandwiches, hot drinks,
        and more.
      </p>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <div className='ml-auto'>
          <ButtonSmall buttonName={'Edit'} buttonLink='/' />
        </div>
      </div>
      <h3 className='text-4xl'>Address</h3>
      <p className='text-l font-sans overflow-hidden'>
        271 Holloway Road, London, N7 8JL
      </p>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <div className='ml-auto'>
          <ButtonSmall buttonName={'Edit'} buttonLink='/' />
        </div>
      </div>
      <h3 className='text-4xl'>Frequently Asked Qs</h3>
      <p className='text-l font-sans overflow-hidden'>Description</p>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <div className='ml-auto'>
          <ButtonSmall buttonName={'Edit'} buttonLink='/' />
        </div>
      </div>
    </div>
  );
}
