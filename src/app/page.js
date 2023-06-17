import Intro from "../components/Intro";
import Categories from "../components/Categories";
import NewProducts from "../components/NewProducts";
import FeatureSectionOne from "../components/FeatureSectionOne";
import RecommendedProducts from "../components/RecommendedProducts";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import FeatureSectionTwo from "../components/FeatureSectionTwo";
import NavBar from "../components/NavBar";

export default async function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Intro />
      <Categories />
      <NewProducts />
      {/* <FeatureSectionOne /> */}
      <FeatureSectionTwo />
      <RecommendedProducts />
      <RecentlyViewedProducts />
    </>
  );
}
