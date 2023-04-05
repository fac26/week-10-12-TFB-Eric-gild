import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import TopBar from 'components/TopBar';
import { signIn, cards } from '@styles/index.js';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/find-food');
    }
  }, [session]);

  return (
    <>
      <Layout Auth pageTitle='Sign In'>
        <div className='mx-auto max-w-md items-center text-accentcolor3'>
          {!session ? (
            <>
              <div>
                <h1 className={cards.normalTextCenter}>
                  Please make an account to reserve your meal!
                </h1>
                <Auth
                  supabaseClient={supabase}
                  providers
                  appearance={signIn.supabase}
                />
              </div>
            </>
          ) : (
            <>
              <p className={cards.normalTextCenter}>
                Sorry, you are currently signed in.
              </p>
              <p className={cards.normalTextCenter}>
                Please sign-out before returning to this page.
              </p>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
