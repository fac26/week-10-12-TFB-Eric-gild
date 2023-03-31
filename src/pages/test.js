import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Button from 'components/Button';

export default function MoreInfo() {
  const router = useRouter();
  const { item } = router.query;
  const { name, description, image } = JSON.parse(item);

  return (
    <Layout>
      <br></br>
      <div>
        <h2>{name}</h2>
        <img src={image[0].url} alt={name} width={200} height={200} />
        <p>{description}</p>
      </div>
    </Layout>
  );
}
