import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import Button from '@components/Button';
import TopBar from 'components/TopBar';
import * as styles from '../styles/';

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
      <TopBar />
      <br />
      <br />
      <br />
      <Layout home>
        <div className={styles.signIn.div}>
          {!session && (
            <>
              <div>
                <h1 className={styles.signIn.h1}>SIGN IN</h1>
                <h1>SIGN IN</h1>
                <Auth
                  supabaseClient={supabase}
                  providers
                  appearance={styles.signIn.supabase}
                />
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
