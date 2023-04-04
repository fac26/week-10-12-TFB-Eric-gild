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
          Email: data.email,
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

async function getCollaborator(tableName, data) {
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

async function createReservation(data) {
  base('reservations').create(
    [
      {
        fields: {
          foodName: data.name,
          restaurantName: data.Name,
          Address: data.Address,
          pickupcode: data.newCode,
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

async function getReservation(tableName, data) {
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

async function removeAReservation() {
  base('reservations').destroy(recordId, function (err, deletedRecord) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deleted record', deletedRecord.id);
  });
}

const airtableModule = {
  base,
  getRecords,
  updateRecords,
  createCollaborator,
  getCollaborator,
  createReservation,
  getReservation,
  removeAReservation,
};

export default airtableModule;
