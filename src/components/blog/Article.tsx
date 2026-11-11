import { Link } from "react-router-dom";
import Rich from "./Rich";
import Phone from "../ui/Phone";
import { Checklist, NetworkChecker, Picker, PostConverter } from "./Interactive";
import { headingId, type Block } from "../../content/blog";
import { CaretRightIcon } from "../icons";
import styles from "./Blog.module.css";

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <Rich text={block.text} />
        </p>
      );
    case "h2":
      return (
        <h2 id={headingId(block.text)}>
          <Rich text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3 id={headingId(block.text)}>
          <Rich text={block.text} />
        </h3>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      // The numbers are a CSS counter, so `start` has to set the counter too.
      const start = block.type === "ol" ? block.start : undefined;
      return (
        <List start={start} style={start ? { counterReset: `step ${start - 1}` } : undefined}>
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "tip":
      return (
        <aside className={styles.tip}>
          <strong>{block.title}</strong>
          <p>
            <Rich text={block.text} />
          </p>
        </aside>
      );
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th key={index} scope="row">
                        <Rich text={cell} />
                      </th>
                    ) : (
                      <td key={index}>
                        <Rich text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "screens":
      return (
        <div className={styles.screens}>
          {block.items.map((item) => (
            <figure key={item.src}>
              <Phone src={item.src} alt={item.alt} className={styles.screenPhone} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      );
    case "answer":
      return (
        <aside className={styles.answer}>
          <strong>Quick answer</strong>
          <p>
            <Rich text={block.text} />
          </p>
        </aside>
      );
    case "converter":
      return <PostConverter coinId={block.coinId} />;
    case "networkChecker":
      return <NetworkChecker />;
    case "checklist":
      return <Checklist title={block.title} items={block.items} />;
    case "picker":
      return <Picker question={block.question} options={block.options} />;
    case "cta":
      return (
        <aside className={styles.cta}>
          <div>
            <strong>{block.title}</strong>
            <p>{block.text}</p>
          </div>
          <Link to={block.to} className={styles.ctaButton}>
            <span>{block.label}</span>
            <CaretRightIcon width={14} height={14} />
          </Link>
        </aside>
      );
  }
}

export default function Article({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.prose}>
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter((block): block is Extract<Block, { type: "h2" }> => block.type === "h2");
  return (
    <nav className={styles.toc} aria-label="On this page">
      <span>On this page</span>
      <ol>
        {headings.map((heading) => (
          <li key={heading.text}>
            <a href={`#${headingId(heading.text)}`}>{heading.text.replace(/\*\*/g, "")}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
