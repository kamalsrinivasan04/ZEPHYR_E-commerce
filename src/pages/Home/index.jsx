import HeroSection from "../../components/HeroSection/HeroSection";
import CategorySection from "../../components/CategorySection/CategorySection";
import ProductSection from "../../components/ProductSection/ProductSection";
import Newsletter from "../../components/Newsletter/Newsletter";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <CategorySection /> */}
      <ProductSection />
      <Newsletter />
    </>
  );
}

export default Home;