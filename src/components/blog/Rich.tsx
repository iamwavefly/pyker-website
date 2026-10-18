import { Fragment } from "react";
import { Link } from "react-router-dom";

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

/** Renders inline [link](/path) and **bold** from post content. */
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, index) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={index} to={href}>
              {label}
            </Link>
          ) : (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
