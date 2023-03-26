import Layout from "components/Layout";
import Button from "components/Button";

export default function Home() {
  return (
    <Layout home isBusinessPage>
      <Button buttonName={"Go"} buttonLink="/find-food" />
    </Layout>
  );
}
