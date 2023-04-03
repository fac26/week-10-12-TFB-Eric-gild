import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import { useState, useEffect } from 'react';
import BusinessAccountDetails from 'components/BusinessAccountDetails';

var Airtable = require('airtable');
var base = new Airtable({
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
}).base('appwjTMNZwwnhuRzz');

base('Collaborators')
  .select({
    // Selecting the first 3 records in FoodVendors:
    maxRecords: 3,
    view: 'FoodVendors',
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

// return (
//   <Layout pageTitle={pageTitle} isBusinessPage>
//     <div className='flex flex-col m-4 items-center'>
//       <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
//         {nameFields.name}
//       </p>
//       <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
//         {addressFields.name}
//       </p>
//     </div>
//     <div className='flex flex-col m-4 items-center gap-4'></div>
//     <BusinessAccountDetails />
//   </Layout>
// );
