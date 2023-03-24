import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session = useSession()
	const supabase = useSupabaseClient()
	const router = useRouter()

	useEffect(() => {
		if (session) {
			router.push('/VendorUploadFormPage')
		}
	}, [session])

    
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyPQ3ZegGxQ8Pg3j'}).base('appwjTMNZwwnhuRzz');

  // base('Collaborators').select({
  //     // Selecting the first 3 records in Grid view:
  //     maxRecords: 3,
  //     view: "Grid view"
  // })
  // .eachPage
  // (function page(records, fetchNextPage) {
  //     // This function (`page`) will get called for each page of records.
  //     records.forEach(function(record) {
  //         console.log('Retrieved', record.get('Name'));
  //     });
  //     fetchNextPage();
  // }, function done(err) {
  //     if (err) { console.error(err); return; }
  // });

  //update records
  base('Collaborators').update([
    {
      "id": "recfVkIK8dJ4Vr7Xq",
      "fields": {
        "Name": "Pret a Manger",
        "Description": "Serves coffee and food",
        "Address": "271 Holloway Road",
        "PhoneNumber": "020 7249 1399",
        "ID": 1
      }
    },
    {
      "id": "recxJGedF9bxoPEYk",
      "fields": {
        "Name": "Cafe Au leyton",
        "Description": "Doesn't exist",
        "Address": "123 Francis Road",
        "PhoneNumber": "020 7249 1399",
        "ID": 2
      }
    },
    {
      "id": "reckLUkY1t9BXQPE3",
      "fields": {
        "Name": "The Cafe",
        "Description": "It is a cafe",
        "Address": "671 Oxford Street",
        "PhoneNumber": "020 7249 1399",
        "ID": 3
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log(record.get('ID'));
    });
  });
  return (
    <div>
    {!session ? (
      <>
      <h1>HOPE</h1>
        <Auth
          supabaseClient={supabase}
          providers
        />
       
      </>
    ) : (
      <></>
    )}
    </div>
  )
}
