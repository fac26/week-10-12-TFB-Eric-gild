import ButtonSmall from '@components/ButtonSmall';

export default function BusinessAccountDetails(props) {
  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <h3 className='text-4xl'>Description</h3>
      <p className='flex justify-start text-center text-accentcolor1 text-2xl'>
        Pret a Manger is a sandwich shop serving soup, sandwiches, hot drinks,
        and more.
      </p>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <ButtonSmall buttonName={'Edit'} buttonLink='/' />
      </div>
      <h3 className='text-4xl'>Address</h3>
      <div className='flex justify-start text-center text-accentcolor1 text-2xl'>
        271 Holloway Road, London, N7 8JL
      </div>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <ButtonSmall buttonName={'Edit'} buttonLink='/' />
      </div>
      <h3 className='text-4xl'>Frequently Asked Qs</h3>
      <p className='flex justify-start text-center text-accentcolor1 text-2xl'>
        Description
      </p>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <ButtonSmall buttonName={'Edit'} buttonLink='/' />
      </div>
    </div>
  );
}
