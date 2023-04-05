import Card from 'components/Card';
import Layout from 'components/Layout';
import airtableModule from 'utils/airtable';
import Filter from 'components/Filter';
import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export async function getServerSideProps() {
  const getFoodFiltersPromise = airtableModule.getRecords('Dietary Options');
  const [filters] = await Promise.all([getFoodFiltersPromise]);
  const getCollaboratorsPromise = airtableModule.getRecords('Collaborators');
  const getMenusPromise = airtableModule.getRecords('menus');
  const [getMenuNames] = await Promise.all([
    getMenusPromise,
    getCollaboratorsPromise,
  ]);
  const availableFood = [];

  const [collaborators] = await Promise.all([getCollaboratorsPromise]); // Wait for all promises to resolve

  for (const collaborator of collaborators) {
    for (const menuID of collaborator.menus) {
      const menuName = getMenuNames.find((menu) => menu.ID === menuID);
      const getMenuItemsPromise = airtableModule.getRecords(menuName.menuName);
      const [getMenuItems] = await Promise.all([getMenuItemsPromise]);
      getMenuItems.forEach((menuItem) => {
        menuItem.menuID = menuID;
        menuItem.collaboratorID = collaborator.ID;
        availableFood.push(menuItem);
      });
    }
  }

  if (availableFood.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      filters,
      collaborators,
      availableFood,
    },
  };
}

export default function FindFood({ filters, collaborators, availableFood }) {
  const pageTitle = 'Find Food';
  const [foodFilter, setFoodFilter] = useState({ Filter: 'All' });

  return (
    <Layout pageTitle={pageTitle}>
      <Filter
        foodFilter={foodFilter}
        setFoodFilter={setFoodFilter}
        filters={filters}
      />
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor3 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          Look through the available foods to find the best food for you.
        </p>
      </div>
      <div className='flex flex-col m-4 items-center gap-4 mb-40'>
        {availableFood ? (
          availableFood.map((item) =>
            item.quantity === 0 ? null : (
              <Card
                filters={filters}
                foodFilter={foodFilter}
                key={`${item.collaboratorID}-${item.ID}`}
                item={item}
                collaborator={collaborators.find(
                  (c) => c.ID === item.collaboratorID
                )}
              />
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
