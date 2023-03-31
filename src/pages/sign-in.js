import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import Button from '@components/Button';
import TopBar from 'components/TopBar';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  console.log('session', session);

  useEffect(() => {
    if (session) {
      router.push('/vendor-upload-form');
    }
  }, [session]);

  return (
    <>
      <TopBar />
      <br />
      <br />
      <br />
      <Layout home>
        <div className='flex items-center justify-center font-cursive text-custom'>
          {!session ? (
            <>
              <div>
                <h1 className='flex justify-center font-cursive text-accentcolor1 text-6xl py-6'>
                  SIGN IN
                </h1>
                <Auth
                  supabaseClient={supabase}
                  providers
                  appearance={{
                    style: {
                      button: {
                        padding: 10,
                        borderColor: '#540375',
                        backgroundColor: '#540375',
                        borderRadius: 7,
                        width: 200,
                        marginLeft: 50,
                        color: '#F5E8DA',
                        textTransform: 'upperCase',
                      },
                      input: {
                        padding: 5,
                        borderColor: '#D9D9D9',
                        backgroundColor: '#F5E8DA',
                        borderRadius: 25,
                        color: 'black',
                        textAlign: 'centre',
                        width: 300,
                      },
                      label: {
                        display: 'none',
                      },
                      anchor: {
                        color: '#540375',
                      },
                    },
                  }}
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </>
  );
}
