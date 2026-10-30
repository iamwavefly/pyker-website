import { PageHero, PageSection, LinkCards } from "../components/page/PageParts";
import Container from "../components/ui/Container";
import VirtualCard from "../components/ui/VirtualCard";
import MerchantLogo from "../components/ui/MerchantLogo";
import Article, { TableOfContents } from "../components/blog/Article";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { PostGrid } from "../components/blog/PostCard";
import { formatPostDate, postsTagged } from "../content/blog";
import { findService, serviceFaq, serviceGuide, servicePath, type Service } from "../content/payFor";
import { FEATURES } from "../data/features";
import { TRADEMARK_NOTE } from "../data/merchants";
import { MERCHANT_LOGOS } from "../data/merchantLogos";
import page from "../components/page/Page.module.css";
import blog from "../components/blog/Blog.module.css";

export default function PayForPage({ service }: { service: Service }) {
  const guide = serviceGuide(service);
  const related = service.related.map(findService).filter((s): s is Service => s !== undefined);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Virtual dollar card", to: FEATURES.virtualCard.path },
          { label: service.name, to: servicePath(service) },
        ]}
        eyebrow={`Guide · updated ${formatPostDate(service.updated)}`}
        title={
          <>
            How to pay for {service.name} <span className="accent">in Nigeria</span>
          </>
        }
        intro={service.intro}
        secondary={{ label: "About the Pyker card", to: FEATURES.virtualCard.path }}
        aside={
          <div style={{ width: "100%", maxWidth: 440, transform: "rotate(-5deg)" }}>
            <VirtualCard color={service.card.color} network={service.card.network} />
          </div>
        }
      />

      <Container>
        <div className={blog.layout}>
          <article>
            <Article blocks={guide} />
          </article>
          <TableOfContents blocks={guide} />
        </div>
      </Container>

      <Faq items={serviceFaq(service)} title={`Paying for ${service.name}: FAQs`} />

      <PageSection eyebrow="More guides" title="Pay for more with your Pyker card">
        <LinkCards
          links={[
            ...related.map((other) => ({
              to: servicePath(other),
              title: `Pay for ${other.name}`,
              text: `Step-by-step guide for ${other.name} with your Pyker card.`,
              icon: MERCHANT_LOGOS[other.name] ? <MerchantLogo name={other.name} size={28} /> : undefined,
            })),
            { to: FEATURES.virtualCard.path, title: FEATURES.virtualCard.label, text: FEATURES.virtualCard.summary },
          ]}
        />
        <p className={page.legalNote}>{TRADEMARK_NOTE}</p>
      </PageSection>

      <PageSection soft eyebrow="Guides" title="Learn more about dollar cards">
        <PostGrid posts={postsTagged(["card"]).slice(0, 3)} />
      </PageSection>

      <FinalCta />
    </>
  );
}
