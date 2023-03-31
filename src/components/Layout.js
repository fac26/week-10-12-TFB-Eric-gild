import NavBar from '@components/NavBar';
import Head from 'next/head';
import TopBar from '@components/TopBar';

export const siteTitle = 'Hope';

export default function Layout({
  id,
  children,
  pageTitle,
  home,
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
            <div>
              <TopBar />
            </div>
            <br />
            <br />
            {pageTitle != null && (
              <h1 className='flex justify-center font-cursive text-accentcolor1 text-6xl py-6'>
                {title.toUpperCase()}
              </h1>
            )}
          </>
        )}
      </header>
      <div>
        <main>{children}</main>
        {!home ? <NavBar isBusinessPage={isBusinessPage} /> : null}
      </div>
    </>
  );
}
