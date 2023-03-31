import Layout from 'components/Layout';

export default function MoreInfo({ foodItem }) {
  return (
    <Layout>
      <div>{JSON.stringify(foodItem)}</div>
    </Layout>
  );
}
