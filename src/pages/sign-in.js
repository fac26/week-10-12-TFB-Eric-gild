import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from 'components/Layout';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/vendor-upload-form');
    }
  }, [session]);

  return (
    <>
      <Layout Auth pageTitle='Sign In'>
        <div className='flex items-center justify-center font-sans text-cutom'>
          {!session ? (
            <>
              <div>
                <Auth
                  supabaseClient={supabase}
                  providers
                  appearance={{
                    style: {
                      button: {
                        padding: 0,
                        borderColor: 'white',
                        borderWidth: 1,
                        backgroundColor: '#540375',
                        borderRadius: 15,
                        width: 300,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'Jomhuria',
                        fontSize: 40,
                        textTransform: 'upperCase',
                      },
                      input: {
                        padding: 5,
                        borderColor: '#F5E8DA',
                        backgroundColor: '#F5E8DA',
                        borderRadius: 15,
                        color: 'black',
                        textAlign: 'centre',
                        fontSize: 14,
                        width: 300,
                      },
                      label: {
                        display: 'none',
                      },
                      anchor: {
                        color: '#F5E8DA',
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
