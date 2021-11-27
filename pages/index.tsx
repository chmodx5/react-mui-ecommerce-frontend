import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import CategorisedProductsSection from "../components/CategorisedProductsSection";
import CollectionsSection from "../components/CollectionsSection";
import PartnerBrandsSection from "../components/PartnerBrandsSection";
import ProductsAdsSection from "../components/ProductsAdsSection";
import SiteDesc from "../components/SiteDesc";
import NewsletterSection from "../components/NewsletterSection";

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <CategorisedProductsSection />
        <CollectionsSection />
        <PartnerBrandsSection />
        <ProductsAdsSection />
        <SiteDesc />
        <NewsletterSection />
      </MainLayout>
    </div>
  );
};

export default Home;
