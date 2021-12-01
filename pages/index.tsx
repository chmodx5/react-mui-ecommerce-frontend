import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Hero from "../components/Hero/Hero/Hero";
import Products from "../components/Products/Products/Products";
import Collections from "../components/Collections/Collections/Collections";
import PartnerBrands from "../components/PartnerBrands/PartnerBrands";
import ProductsAds from "../components/ProductsAds/ProductsAds";
import SiteDesc from "../components/SiteDesc/SiteDesc";
import Newsletter from "../components/Newsletter/Newsletter";

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Products />
        <Collections />
        <PartnerBrands />
        <ProductsAds />
        <SiteDesc />
        <Newsletter />
      </MainLayout>
    </div>
  );
};

export default Home;
