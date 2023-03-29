import Card from 'components/Card';
import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';

export async function getServerSideProps() {
  const tableName = 'menus';
  const getDonorsPromise = airtableModule.getRecords(tableName);
  const availableFood = [];

  const [getDonors] = await Promise.all([getDonorsPromise]); // Wait for all promises to resolve

  for (const record of getDonors) {
    const getMenuItemsPromise = airtableModule.getRecords(record.menuName);
    const [getMenuItems] = await Promise.all([getMenuItemsPromise]);

    // Extract an array of values from the getMenuItems object
    const menuItemsValues = Object.values(getMenuItems);

    // Push each object within the getMenuItems object directly to the availableFood array
    availableFood.push(...menuItemsValues);
  }

  if (getDonors.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      availableFood,
    },
  };
}

export default function FindFood({ availableFood }) {
  const pageTitle = 'Find Food';

  return (
    <Layout pageTitle={pageTitle}>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          Look through the available foods to find the best food for you.
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4 mb-40'>
        {availableFood ? (
          availableFood.map((item) => (
            <>
              <Card key={'temp'} item={item} />
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
