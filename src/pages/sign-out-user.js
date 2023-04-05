import Layout from '../components/Layout';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function SignOutPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  return (
    <Layout pageTitle={'Sign out'}>
      <button
        className='text-accentcolor3 w-screen flex justify-between items-center h-16 px-6'
        onClick={() => supabase.auth.signOut() && router.push('/')}
      >
        Sign Out
      </button>
    </Layout>
  );
}
