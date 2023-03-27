import Layout from 'components/Layout';
import Button from 'components/Button';
import airtableModule from 'utils/airtable';
import ManageStockCard from 'components/ManageStockCard';
import { useState, useEffect } from 'react';

export default function FindFood() {
  const pageTitle = 'Manage Food';
  const donor = 'pret';
  const [menu, setMenu] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    async function getMenu() {
      const menu = await airtableModule.getRecords(donor);
      setMenu(menu);
      setDataFetched(true);
    }
    getMenu();
  }, []);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className='flex flex-col m-4 items-center'>
        <p className='text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto'>
          What’s available at Pret, Holloway Road?
        </p>
      </div>
      <div className='flex flex-col m-4 items-center'>
        {dataFetched ? (
          menu.map((item) => <ManageStockCard key={item.id} record={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Button buttonName={'Save'} buttonLink='/' />
    </Layout>
  );
}
