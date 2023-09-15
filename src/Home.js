import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
// import { useProductContext } from "../src/context/productContext";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  // const myName = useProductContext();

  const data = {
    name: "shopping store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
