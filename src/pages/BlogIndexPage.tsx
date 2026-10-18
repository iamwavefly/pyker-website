import { PageHero, PageSection } from "../components/page/PageParts";
import { PostGrid } from "../components/blog/PostCard";
import FinalCta from "../components/sections/FinalCta";
import { BLOG_PATH, POSTS } from "../content/blog";
import { FEATURES } from "../data/features";

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: BLOG_PATH },
        ]}
        eyebrow="Pyker blog"
        title={
          <>
            Guides to crypto and <span className="accent">paying online</span> in Nigeria
          </>
        }
        intro="Practical, plain-English guides on selling crypto for naira, using a virtual dollar card, and staying safe while you do it."
        secondary={{ label: "See today's rates", to: FEATURES.rates.path }}
      />
      <PageSection title="Latest guides">
        <PostGrid posts={POSTS} />
      </PageSection>
      <FinalCta />
    </>
  );
}
