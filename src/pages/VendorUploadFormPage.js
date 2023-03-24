//vendor-upload-form page
import FoodVendorDetails from '../../components/VendorUploadForm'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useSession } from '@supabase/auth-helpers-react'

export default function Test() {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const session = useSession()

	  const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
      };
    

      return (
        <>
          {session ? (
            <>
              <h1>HOPE</h1>
               <FoodVendorDetails/> 
              <button onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          ) : null}
        </>
      );
    }


  