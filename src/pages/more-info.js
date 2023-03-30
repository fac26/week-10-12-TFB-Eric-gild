import Layout from '@components/Layout';
import { useMatch } from 'react-router-dom';

export default function MoreInfo() {
  const match = useMatch('/more-info/:id');
  const itemId = match.params.id;

  console.log(match);
  return (
    <Layout home>
      <div className='flex flex-row justify-between gap-6 px-2 py-2'>
        {JSON.stringify(item)}
      </div>
    </Layout>
  );
}
