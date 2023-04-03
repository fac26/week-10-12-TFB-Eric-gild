import Layout from 'components/Layout';
import ButtonSmall from 'components/ButtonSmall';
import { useEffect, useState } from 'react';

export default function ReservationsPage() {
  const [contentlist, setcontentlist] = useState([]);

  useEffect(() => {
    const individualitems = localStorage.getItem('orderedItem').split(',');
    setcontentlist(individualitems);
  }, []);

  return (
    <Layout pageTitle={'Your reservations'}>
      <h1 className='flex justify-center font-cursive text-accentcolor1 text-6xl py-6'>
        Food reserved:
      </h1>
      <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 py-6 px-6 rounded-lg'>
        <h2 className='font-cursive  text-4xl'>{contentlist[0]}</h2>
        <p className=' text-1xl'>
          {contentlist[1]}, {contentlist[2]}
        </p>
        <p>{contentlist[3]}</p>
        <h1 className='font-cursive text-4xl'>
          Your Pick up code is: {contentlist[4]}
        </h1>
        <div className='flex justify-end'>
          <ButtonSmall buttonName='Cancel' className='ml-4' />
        </div>
      </div>
    </Layout>
  );
}

//collaborator id where they ordered the food from
//and item/food id
