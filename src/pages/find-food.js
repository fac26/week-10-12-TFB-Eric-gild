import Card from 'components/Card';
import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';

export async function getServerSideProps() {
  const getCollaboratorsPromise = airtableModule.getRecords('Collaborators');
  const getMenusPromise = airtableModule.getRecords('menus');
  const [getMenuNames] = await Promise.all([
    getMenusPromise,
    getCollaboratorsPromise,
  ]);
  const availableFood = [];

  const [collaborators] = await Promise.all([getCollaboratorsPromise]); // Wait for all promises to resolve
  // const [menus] = await Promise.all([getMenusPromise]); // Wait for all promises to resolve

  for (const collaborator of collaborators) {
    for (const menuID of collaborator.menus) {
      const menuName = getMenuNames.find((menu) => menu.ID === menuID);
      const getMenuItemsPromise = airtableModule.getRecords(menuName.menuName);
      const [getMenuItems] = await Promise.all([getMenuItemsPromise]);
      const menuItemsValues = Object.values(getMenuItems); // Extract an array of values from the getMenuItems object
      for (const menuItem of menuItemsValues) {
        menuItem.menuID = menuID;
        menuItem.menuName = menuName.menuName;
        menuItem.collaboratorID = collaborator.ID;
      }

      availableFood.push(...menuItemsValues);
    }
    const temp = 'value';
    // console.log(availableFood);

    //availableFood.push(...menuItemsValues); // Push each object within the getMenuItems object directly to the availableFood array
  }

  if (availableFood.length === 0) {
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
            return (
              <Card
                key={`${item.collaboratorID}-${item.ID}`}
                item={item}
                collaborator={collaborator}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
