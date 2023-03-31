const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

async function getRecords(tableName) {
  if (tableName) {
    throw new Error(
      'Cannot get records: tableName is missing [airtable, getRecords]'
    );
  }
  const records = [];
  const query = base(tableName).select({});

  await new Promise((resolve, reject) => {
    query.eachPage(
      function page(pageRecords, fetchNextPage) {
        pageRecords.forEach(function (record) {
          records.push(record.fields);
        });
        fetchNextPage();
      },
      function done(err) {
        err ? reject(err) : resolve(records);
      }
    );
  });
  return records;
}

async function updateRecords(tableName, menuItems) {
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

async function createCollaborator(data) {
  base('Collaborators').create(
    [
      {
        fields: {
          Name: data.companyname,
          Description: data.description,
          Address: data.address,
          PhoneNumber: data.phonenumber,
          Hours: data.hours,
        },
      },
    ],
    function (err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}

async function getCollaborator(tableName) {
  const records = [];
  const query = base(tableName).select({});

  await new Promise((resolve, reject) => {
    query.eachPage(
      (pageRecords, fetchNextPage) => {
        pageRecords.forEach((record) => {
          records.push(record.fields);
        });
        fetchNextPage();
      },
      (err) => {
        err ? reject(err) : resolve();
      }
    );
  });

  return records;
}

const airtableModule = {
  base,
  getRecords,
  updateRecords,
  createCollaborator,
  getCollaborator,
};

export default airtableModule;
