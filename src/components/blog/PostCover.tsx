import VirtualCard from "../ui/VirtualCard";
import { ShieldCheckIcon } from "../icons";
import { COINS } from "../../data/coins";
import type { PostCover as Cover } from "../../content/blog/types";
import styles from "./Blog.module.css";

export default function PostCover({ cover, className }: { cover: Cover; className?: string }) {
  if (cover.kind === "art") {
    return (
      <span className={`${styles.cover} ${className ?? ""}`}>
        <img src={cover.src} alt="" loading="lazy" />
      </span>
    );
  }

  return (
    <span className={`${styles.cover} ${styles[cover.tone]} ${className ?? ""}`}>
      {cover.kind === "shield" ? (
        <span className={styles.coverIcon}>
          <ShieldCheckIcon width={48} height={48} />
        </span>
      ) : cover.kind === "card" ? (
        <span className={styles.coverCard}>
          <VirtualCard color={cover.color} network={cover.network} />
        </span>
      ) : (
        <span className={styles.coverCoins}>
          {cover.ids.map((id) => {
            const coin = COINS.find((c) => c.id === id);
            return coin ? (
              <span key={id} className={styles.coverCoin}>
                <coin.Icon size={cover.ids.length > 1 ? 52 : 72} />
              </span>
            ) : null;
          })}
        </span>
      )}
    </span>
  );
}
