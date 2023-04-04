import BackButton from '@components/BackButton';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function TopBar() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  return (
    <div className='fixed'>
      <nav className='bg-green text-accentcolor3 w-screen flex justify-between items-center h-16 px-10'>
        <BackButton className='flex-none ' />
        {session ? (
          <button onClick={() => supabase.auth.signOut() && router.push('/')}>
            Sign Out
          </button>
        ) : (
          ''
        )}
        <div>
          <h3 className='text-right text-accentcolor3 text-2xl font-heading'>
            HOPE
          </h3>
        </div>
      </nav>
      <hr className='w-11/12 h-px mx-auto bg-accentcolor3 border-0' />
    </div>
  );
}

// flex justify-between items-center
//border-b border-solid border-accentcolor3
