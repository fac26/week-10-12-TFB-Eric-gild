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
    <Layout pageTitle='Sign in'>
      <div className='flex justify-center font-cursive text-custom'>
        {!session ? (
          <>
            <Auth
              supabaseClient={supabase}
              providers
              appearance={{
                style: {
                  button: {
                    padding: 5,
                    borderColor: '#540375',
                    backgroundColor: '#540375',
                    borderRadius: 25,
                    width: 300,
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
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}
