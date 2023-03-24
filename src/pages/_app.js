import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import '@fontsource/roboto-flex/400.css'
import '@styles/globals.css'


export default function MyApp({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient())
	return (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}>
			<Component {...pageProps} />
		</SessionContextProvider>
	)
}
