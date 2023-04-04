import LogoLandingPage from '@components/LogoLandingPage';
import Layout from '@components/Layout';
import ButtonLink from '@components/ButtonLink';
import ButtonSmall from '@components/ButtonSmall';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const source = '/logo.png';
  const alt =
    'The word hope written in white in calligraphy style, with the letter O in the shape of a heart and the legend food. The strap line reads donate with love. ';

  return (
    <Layout home>
      <div
        className={`h-screen w-screen bg-cover bg-hero-image-phone lg:bg-hero-image`}
      >
        <div className='flex flex-row justify-between gap-6 px-2 py-2'>
          <ButtonSmall buttonName={'Vendor'} buttonLink='/sign-in' />
          <ButtonSmall buttonName={'Donate Food Voucher'} buttonLink='/' />
        </div>
        <div className='flex flex-col m-10 gap-10 px-2 py-2 items-center'>
          <LogoLandingPage src={source} width={500} height={131} alt={alt} />
          <p className='text-accentcolor3 text-center font-sans text-md leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
            The stigma-free way of sharing emergency food{' '}
          </p>
          <p className='text-accentcolor3 text-center font-cursive text-6xl leading-1.5 m-0 max-w-40rem mx-auto mb-4'>
            READY FOR FOOD?
          </p>
          <ButtonLink buttonName={'Go'} buttonLink='/find-food' />
        </div>
      </div>
    </Layout>
  );
}
