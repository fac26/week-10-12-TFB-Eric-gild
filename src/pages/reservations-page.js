import Layout from 'components/Layout';
import ButtonSmall from 'components/ButtonSmall';
import { useEffect, useState } from 'react';

export default function ReservationsPage() {
  //   if (typeof window !== 'undefined') {
  useEffect(() => {
    // Perform localStorage action
    const pickupcode = localStorage.getItem('pickup');
    console.log(pickupcode);
    setnewcode(pickupcode);
  });

  const [newcode, setnewcode] = useState('');

  return (
    <Layout pageTitle={'Welcome{companyname}'}>
      <h1 className='flex justify-center font-cursive text-accentcolor1 text-6xl py-6'>
        Food reserved:
      </h1>
      <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 py-6 px-6 rounded-lg'>
        <h2 className='font-cursive  text-3xl'>Chicken sandwich</h2>
        <p className=' text-1xl'>Address</p>
        <h1 className='font-cursive text-4xl'>
          Your Pick up code is: {newcode}
        </h1>
        <div className='flex justify-end'>
          <ButtonSmall buttonName='Cancel' className='ml-4' />
        </div>
      </div>
    </Layout>
  );
}
