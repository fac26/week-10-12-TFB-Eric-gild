const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

async function getTable(tableName) {
  const records = await base(tableName).select({}).all();
  console.log(records);
  return records;
}

const airtableModule = { base, getTable };

export default airtableModule;
