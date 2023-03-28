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
      <Button buttonName={'Sign-In'} buttonLink='/vendor-upload-form' />
      <div>
        {!session ? (
          <>
            <h1>HOPE</h1>
            <Auth supabaseClient={supabase} providers />
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}
