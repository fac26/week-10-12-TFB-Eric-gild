import Card from 'components/Card';
import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';

export async function getServerSideProps() {
  const getCollaboratorsPromise = airtableModule.getRecords('Collaborators');
  const getDonorsPromise = airtableModule.getRecords('menus');
  const availableFood = [];

  const [collaborators] = await Promise.all([getCollaboratorsPromise]); // Wait for all promises to resolve
  const [donors] = await Promise.all([getDonorsPromise]); // Wait for all promises to resolve

  for (const record of donors) {
    const getMenuItemsPromise = airtableModule.getRecords(record.menuName);
    const [getMenuItems] = await Promise.all([getMenuItemsPromise]);
    //add menuName to each object inside of menuItemsValues

    for (const menuItem of getMenuItems) {
      menuItem.menuID = record.ID;
    }

    const menuItemsValues = Object.values(getMenuItems); // Extract an array of values from the getMenuItems objec

    availableFood.push(...menuItemsValues); // Push each object within the getMenuItems object directly to the availableFood array
  }

  if (donors.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      collaborators,
      availableFood,
    },
  };
}

export default function FindFood({ collaborators, availableFood }) {
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
          availableFood.map((item) => {
            const collaborator = collaborators.find(
              (c) => c.menus[0] === item.menuID
            );
            availableFood.map((i) => console.log(i));
            console.log(availableFood);

            console.log('item menu id', item.menuID);
            return (
              <Card key={item.ID} item={item} collaborator={collaborator} />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
