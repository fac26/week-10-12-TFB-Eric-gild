const Airtable = require('airtable');
const base = new Airtable({
  apiKey: 'key6rSDBU4oEqvOtv',
}).base('appwjTMNZwwnhuRzz');

const table = base('collaborators');

async function getTable(table) {
  const records = await base(table).select({}).all();
  console.log(records);
  return records;
}

export { getTable };
