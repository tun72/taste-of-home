import HeroSection from "../ui/HeroSection";
import PopularSection from "../ui/PopularSection";
import ServiceSection from "../ui/ServiceSection";
import MostRecipeSection from "../ui/MostRecipeSection";
import CustomerReviewSection from "../ui/CustomerReviewSection";
import ChefSection from "../ui/ChefSection";
import HomeFooter from "../ui/HomeFooter";
function Home() {
  return (
    <section className="h-[100vh] w-full overflow-y-scroll">
      <HeroSection />
      <PopularSection />
      <ServiceSection />
      <MostRecipeSection />
      <CustomerReviewSection />
      <ChefSection />
      <HomeFooter />
    </section>
  );
}

export default Home;
