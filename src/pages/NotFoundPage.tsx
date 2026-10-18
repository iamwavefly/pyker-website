import { PageHero, PageSection, LinkCards } from "../components/page/PageParts";
import { FEATURES } from "../data/features";

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", to: "/" }]}
        eyebrow="Error 404"
        title="We couldn't find that page"
        intro="The page you're looking for doesn't exist or has moved. Here are some good places to start."
        secondary={{ label: "Back to home", to: "/" }}
      />
      <PageSection title="Popular pages">
        <LinkCards
          links={[FEATURES.sellCrypto, FEATURES.rates, FEATURES.virtualCard].map((feature) => ({
            to: feature.path,
            title: feature.label,
            text: feature.summary,
          }))}
        />
      </PageSection>
    </>
  );
}
