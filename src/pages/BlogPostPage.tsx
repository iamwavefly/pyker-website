import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Article, { TableOfContents } from "../components/blog/Article";
import { PostGrid } from "../components/blog/PostCard";
import { PageSection } from "../components/page/PageParts";
import Faq from "../components/sections/Faq";
import FinalCta from "../components/sections/FinalCta";
import { BLOG_PATH, POSTS, formatPostDate, postsTagged, readingMinutes, type Post } from "../content/blog";
import page from "../components/page/Page.module.css";
import styles from "../components/blog/Blog.module.css";

export default function BlogPostPage({ post }: { post: Post }) {
  const related = postsTagged(post.tags, post).slice(0, 3);
  const more = related.length ? related : POSTS.filter((p) => p !== post).slice(0, 3);

  return (
    <>
      <section className={page.hero}>
        <div className={page.wash} aria-hidden="true" />
        <Container>
          <nav aria-label="Breadcrumb" className={page.crumbs}>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={BLOG_PATH}>Blog</Link>
              </li>
              <li>
                <span aria-current="page">{post.title}</span>
              </li>
            </ol>
          </nav>
          <header className={styles.postHero}>
            <div className={styles.postMeta}>
              <span className={styles.category}>{post.category}</span>
              <time dateTime={post.published}>{formatPostDate(post.published)}</time>
              <span>· {readingMinutes(post)} min read</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>
        </Container>
      </section>

      <Container>
        <div className={styles.layout}>
          <article>
            <Article blocks={post.body} />
          </article>
          <TableOfContents blocks={post.body} />
        </div>
      </Container>

      <Faq items={post.faq} title="Frequently asked questions" />

      <PageSection title="Keep reading">
        <PostGrid posts={more} />
      </PageSection>

      <FinalCta />
    </>
  );
}
