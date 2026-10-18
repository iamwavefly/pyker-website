import Hero from "../components/sections/Hero";
import ProductTabs from "../components/sections/ProductTabs";
import QuickSteps from "../components/sections/QuickSteps";
import CardSection from "../components/sections/CardSection";
import PainPoints from "../components/sections/PainPoints";
import Security from "../components/sections/Security";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductTabs />
      <QuickSteps />
      <PainPoints soft />
      <CardSection />
      <Security />
      <Faq />
      <FinalCta />
    </>
  );
}
