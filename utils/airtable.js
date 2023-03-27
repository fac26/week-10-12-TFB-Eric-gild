const Airtable = require('airtable');
const base = new Airtable({
  apiKey,
}).base(apiBase);

const table = base('collaborators');

async function getTable(table) {
  const records = await base(table).select({}).all();
  console.log(records);
  return records;
}

export { getTable };
