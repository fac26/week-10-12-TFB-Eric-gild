import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import Button from '@components/Button';

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
      <div>
        {!session ? (
          <>
            <h1>HOPE</h1>
            <Auth
              supabaseClient={supabase}
              providers
              appearance={{
                style: {
                  email: { background: 'red', color: 'white' },
                  anchor: { color: 'blue' },
                  //..
                },
              }}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <Button buttonName={'Sign In'} buttonLink='/vendor-upload-form' />
    </Layout>
  );
}
