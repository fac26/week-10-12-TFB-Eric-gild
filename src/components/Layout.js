import NavBar from '@components/NavBar';
import Head from 'next/head';
import TopBar from '@components/TopBar';
import Home from 'pages';

export const siteTitle = 'Hope';

export default function Layout({
  children,
  pageTitle,
  home,
  auth,
  isBusinessPage,
}) {
  const title = pageTitle || null;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='description' content='Emergency food finder' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        {home ? null : (
          <>
            <TopBar />
          </>
        )}
        {pageTitle != null && (
          <div className='pt-20'>
            <h1 className='flex justify-center font-cursive text-accentcolor3 text-6xl py-4'>
              {title.toUpperCase()}
            </h1>
          </div>
        )}
      </header>
      <div>
        <main>{children}</main>
        {home || auth ? null : <NavBar isBusinessPage={isBusinessPage} />}
      </div>
    </>
  );
}
