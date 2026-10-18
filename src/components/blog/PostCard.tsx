import { Link } from "react-router-dom";
import { formatPostDate, postPath, readingMinutes, type Post } from "../../content/blog";
import PostCover from "./PostCover";
import Reveal from "../ui/Reveal";
import styles from "./Blog.module.css";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link to={postPath(post)} className={styles.card}>
      <PostCover cover={post.cover} className={styles.cardCover} />
      <span className={styles.cardBody}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.cardTitle}>{post.title}</span>
        <span className={styles.cardExcerpt}>{post.excerpt}</span>
        <span className={styles.meta}>
          <time dateTime={post.published}>{formatPostDate(post.published)}</time> · {readingMinutes(post)} min read
        </span>
      </span>
    </Link>
  );
}

export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <Reveal key={post.slug} delay={(index % 3) * 80}>
          <PostCard post={post} />
        </Reveal>
      ))}
    </div>
  );
}
