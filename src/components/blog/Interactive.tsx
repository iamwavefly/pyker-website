import { useState } from "react";
import { Link } from "react-router-dom";
import Rich from "./Rich";
import RateConverter from "../page/RateConverter";
import { COINS } from "../../data/coins";
import { BILL_PROVIDERS, billProviderPath } from "../../content/billProviders";
import { CheckIcon } from "../icons";
import styles from "./Blog.module.css";

// Small tools that live inside posts, so readers can do something, not just read.

export function PostConverter({ coinId }: { coinId: string }) {
  const coin = COINS.find((c) => c.id === coinId);
  if (!coin) return null;
  return (
    <div className={styles.tool}>
      <span className={styles.toolLabel}>Try it: {coin.symbol} to naira at today's rate</span>
      <RateConverter coin={coin} initial={coin.amounts[Math.floor(coin.amounts.length / 2)]} />
    </div>
  );
}

// Prefixes come from the network pages' facts, so the two never disagree.
const PREFIXES = BILL_PROVIDERS.filter((provider) => provider.kind === "network").flatMap((provider) =>
  provider.facts.items.flatMap((line) => line.split(",").map((prefix) => ({ prefix: prefix.trim(), provider }))),
);

/** 08031234567, +2348031234567 and 2348031234567 all become 08031234567. */
function localNumber(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("234")) return `0${digits.slice(3)}`;
  return digits;
}

export function NetworkChecker() {
  const [value, setValue] = useState("");
  const number = localNumber(value);
  // Longest prefix first, so 07025 wins over a shorter match.
  const match = number.length >= 4
    ? [...PREFIXES].sort((a, b) => b.prefix.length - a.prefix.length).find((entry) => number.startsWith(entry.prefix))
    : undefined;

  return (
    <div className={styles.tool}>
      <span className={styles.toolLabel}>Which network is this number on?</span>
      <input
        className={styles.toolInput}
        type="tel"
        inputMode="tel"
        autoComplete="off"
        placeholder="Type a number, e.g. 0803 123 4567"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        aria-label="Phone number"
      />
      <p className={styles.toolResult} aria-live="polite">
        {number.length < 4 ? (
          "Start typing and we'll tell you the network from the prefix."
        ) : match ? (
          <>
            <strong>{number.slice(0, match.prefix.length)} is {match.provider.name}.</strong> Unless the number was ported to
            another network.{" "}
            <Link to={billProviderPath(match.provider)}>Buy {match.provider.name} airtime and data with cashback</Link>
          </>
        ) : (
          "We don't recognise that prefix. Check the number, or ask which network it's on."
        )}
      </p>
    </div>
  );
}

export function Checklist({ title, items }: { title: string; items: string[] }) {
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const count = done.filter(Boolean).length;
  return (
    <div className={styles.tool}>
      <span className={styles.toolLabel}>
        {title} · {count === items.length ? "all done 🎉" : `${count} of ${items.length} done`}
      </span>
      <div className={styles.checklist}>
        {items.map((item, index) => (
          <label key={item} className={done[index] ? styles.checked : undefined}>
            <input
              type="checkbox"
              checked={done[index]}
              onChange={() => setDone((prev) => prev.map((value, i) => (i === index ? !value : value)))}
            />
            <span className={styles.checkBox} aria-hidden="true">
              <CheckIcon width={14} height={14} />
            </span>
            <span>
              <Rich text={item} />
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function Picker({ question, options }: { question: string; options: { label: string; result: string }[] }) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className={styles.tool}>
      <span className={styles.toolLabel}>{question}</span>
      <div className={styles.pickerOptions} role="group" aria-label={question}>
        {options.map((option, index) => (
          <button key={option.label} type="button" aria-pressed={picked === index} onClick={() => setPicked(index)}>
            {option.label}
          </button>
        ))}
      </div>
      <p className={styles.toolResult} aria-live="polite">
        {picked === null ? "Pick one to see what it means for you." : <Rich text={options[picked].result} />}
      </p>
    </div>
  );
}
