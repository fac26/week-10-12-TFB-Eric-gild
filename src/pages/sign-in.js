import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabahelpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

  return (
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
  );
}
