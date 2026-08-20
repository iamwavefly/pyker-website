import { useState } from "react";
import { CheckIcon, CopyIcon } from "../icons";
import styles from "./CopyButton.module.css";

export default function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access denied or unavailable, nothing to fall back to safely.
    }
  }

  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(" ")}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : `Copy ${text}`}
    >
      {copied ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />}
    </button>
  );
}
