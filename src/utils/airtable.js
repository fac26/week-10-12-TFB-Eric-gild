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

async function updateRecords(tableName, updates) {
  console.log('updating records', tableName, updates);
  const mappedUpdates = Object.keys(updates).map((key) => {
    const item = updates[key];
    return {
      id: key,
      fields: {
        name: item.name,
        quantity: item.quantity,
      },
    };
  });

  console.log(mappedUpdates);
  return new Promise((resolve, reject) => {
    base(tableName).update(mappedUpdates, function done(err, record) {
      if (err) {
        reject(err);
        return;
      }
      console.log('here');
      resolve(record);
    });
  });
}

const airtableModule = { base, getRecords, updateRecords };

export default airtableModule;
