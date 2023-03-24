import GreenButton from '@components/GreenButton';
import LogoLandingPage from '@components/LogoLandingPage';
import style from '@styles/Home.module.css';
import Layout from 'components/Layout';

export default function Home() {
  const vendorTitle = 'Vendors';
  const source = '/logoLandingPage.png';
  const alt =
    'The word hope written in white in calligraphy style, with the letter O in the shape of a heart and the legend food. The strap line reads donate with love. ';

  return (
    <Layout isBusinessPage>
      <GreenButton title={vendorTitle} />
      <LogoLandingPage src={source} width={300} height={131} alt={alt} />
      <p className={style.copy}>
        The stigma-free way of sharing emergency food{' '}
      </p>
      <p className={style.readyForFood}>Ready for food?</p>
    </Layout>
  );
}
