const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

async function getRecords(tableName) {
  const records = [];
  await base(tableName)
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
          console.error(err);
          return;
        }
      }
    );

  console.log(records);
  return records;
}

const airtableModule = { base, getRecords };

export default airtableModule;
