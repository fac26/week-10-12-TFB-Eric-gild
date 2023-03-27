import LogoLandingPage from "@components/LogoLandingPage";
import Layout from "@components/Layout";
import Button from "@components/Button";
import ButtonSmall from "@components/ButtonSmall";

export default function Home() {
  const source = "/logoLandingPage.png";
  const alt =
    "The word hope written in white in calligraphy style, with the letter O in the shape of a heart and the legend food. The strap line reads donate with love. ";

  return (
    <Layout home>
      <div className="flex flex-row justify-between gap-6 px-2 py-2">
        <ButtonSmall buttonName={"Vendor"} buttonLink="/" />
        <ButtonSmall buttonName={"Support Us"} buttonLink="/" />
      </div>
      <div className="flex flex-col m-16 gap-6 px-2 py-2 items-center">
        <LogoLandingPage src={source} width={300} height={131} alt={alt} />
        <p className="text-accentcolor2 text-center font-sans text-lg leading-1.5 m-0 max-w-30rem px-6 mx-auto">
          The stigma-free way of sharing emergency food{" "}
        </p>
        <p className="text-accentcolor2 text-center font-cursive text-6xl leading-1.5 m-0 max-w-40rem mx-auto">
          READY FOR FOOD?
        </p>
        <Button buttonName={"Go"} buttonLink="/find-food" />
      </div>
    </Layout>
  );
}
