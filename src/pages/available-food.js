import Layout from 'components/Layout';
import airtable from 'services/airtable';
import WhatsAvailable from 'components/WhatsAvailableCard';
import { useState, useEffect } from 'react';
import styles from '../styles';

export async function getServerSideProps() {
  const donor = 'pret';
  const menu = await airtable.getRecords(donor);

  if (!menu) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      menu: menu,
    },
  };
}

export default function ManageFood({ menu }) {
  const [items, setItems] = useState([]);
  const pageTitle = 'Available Food';

  useEffect(() => {
    const newItems = menu.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        quantity: item.quantity,
      },
    }));
    setItems(newItems);
  }, [menu]);

  return (
    <Layout pageTitle={pageTitle} isBusinessPage>
      <div className={styles.availableFood.div}>
        <p className={styles.availableFood.p}>Pret</p>
        <p className={styles.availableFood.p}>
          271 Holloway Road, London N7 8JL
        </p>
      </div>
      <div className={`${styles.availableFood.div} gap-4`}>
        {items.length ? <WhatsAvailable items={items} /> : <p>Loading...</p>}
      </div>
    </Layout>
  );
}
