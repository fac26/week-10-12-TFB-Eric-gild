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

async function updateRecords(tableName, menuItems) {
  console.log('updating records', tableName, menuItems);
  const mappedUpdates = Object.keys(menuItems).map((key) => {
    const item = menuItems[key];
    return {
      id: item.id,
      fields: {
        name: item.fields.name,
        quantity: item.fields.quantity,
      },
    };
  });

  console.log(mappedUpdates);

  base(tableName).update(mappedUpdates, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
}

const airtableModule = { base, getRecords, updateRecords };

export default airtableModule;
