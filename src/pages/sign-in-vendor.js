import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { signIn, cards } from '@styles/index.js';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    async function checkCollaborator() {
      if (session && session.user && session.user.email) {
        const userEmail = session.user.email;
        const collaboratorRecords = await airtableModule.getRecords(
          'Collaborators'
        );
        const collaboratorEmails = collaboratorRecords.map(
          (record) => record.Email
        );
        if (collaboratorEmails.includes(userEmail)) {
          console.log('its here');
          router.push('/manage-food');
        } else {
          router.push('/vendor-upload-form');
        }
      }
    }
    checkCollaborator();
  }, [session]);

  return (
    <>
      <Layout Auth pageTitle='Sign In'>
        <div className={signIn.div}>
          {!session ? (
            <>
              <div>
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
