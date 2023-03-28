const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

async function getRecords(tableName) {
  return new Promise((resolve, reject) => {
    const records = [];
    base(tableName)
      .select({})
      .eachPage(
        function page(pageRecords, fetchNextPage) {
          pageRecords.forEach(function (record) {
            records.push(record.fields);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(records);
        }
      );
  });
}

// async function updateRecords(tableName, updates) {
//   console.log('updating records', tableName, updates);
//   return new Promise((resolve, reject) => {
//     base(tableName).update(updates, function done(err, records) {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(records);
//     });
//   });
// }

async function updateRecords(tableName, updates) {
  console.log('updating records', tableName, updates);
  console.log(typeof updates);
  // const itemsArray = Object.keys(updates).map((ID) => ({
  //   id: ID,
  //   fields: {
  //     Name: items[itemId].name,
  //     Quantity: items[itemId].quantity,
  //   },
  // }));
  // return new Promise((resolve, reject) => {
  //   base(tableName).update(itemsArray, function done(err, record) {
  //     if (err) {
  //       reject(err);
  //       return;
  //     }
  //     resolve(record);
  //   });
  // });
}

const airtableModule = { base, getRecords, updateRecords };

export default airtableModule;
