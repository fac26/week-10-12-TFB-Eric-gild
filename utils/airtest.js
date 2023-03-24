//The (table) id for Collaborators is tbljymPx0VepXmcE0
//even if you change the name collaborators to something else the id stays the same
//QUESTION: pages

// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyPQ3ZegGxQ8Pg3j'}).base('appwjTMNZwwnhuRzz');

// base('Collaborators').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Name'));
//     });
//     fetchNextPage();
// }, function done(err) {
//     if (err) { console.error(err); return; }
// });