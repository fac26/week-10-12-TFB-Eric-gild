import BackButton from './BackButton';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function TopBar() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  return (
    <nav className='fixed bg-green w-screen mx-auto border-b flex justify-between items-center h-16 px-4'>
      <BackButton className='flex-none' />
      <button
        className={`text-white`}
        onClick={() => supabase.auth.signOut() && router.push('/')}
      >
        Sign Out
      </button>
      <h3 className='text-right text-accentcolor2 text-2xl font-heading'>
        HOPE
      </h3>
    </nav>
  );
}

// flex justify-between items-center
