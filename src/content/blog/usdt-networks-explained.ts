import type { Post } from "./types";

export const usdtNetworks: Post = {
  slug: "usdt-networks-trc20-vs-erc20-vs-bep20",
  title: "TRC20 vs ERC20 vs BEP20: Which USDT Network Should You Use?",
  metaTitle: "TRC20 vs ERC20 vs BEP20: USDT Networks Explained",
  description:
    "USDT runs on several blockchains. Learn the difference between TRC20, ERC20 and BEP20, how fees compare, and how to avoid sending on the wrong network.",
  excerpt:
    "USDT runs on several blockchains, and picking the wrong one can cost you your funds. Here's how TRC20, ERC20 and BEP20 differ, in plain English.",
  category: "Guides",
  tags: ["usdt", "sell", "safety"],
  published: "2026-10-18",
  updated: "2026-10-18",
  cover: { kind: "coins", ids: ["tether", "ethereum", "solana"], tone: "peach" },
  body: [
    {
      type: "p",
      text: "When you withdraw USDT from an exchange, you're asked to choose a network: TRC20, ERC20, BEP20 and sometimes more. It's the step that confuses people most, and getting it wrong can mean losing your money. Here's what those names mean and how to choose.",
    },
    { type: "h2", text: "What a USDT network is" },
    {
      type: "p",
      text: "USDT isn't tied to one blockchain. Tether issues versions of USDT on several networks, and each version lives only on its own network. One USDT on Tron and one USDT on Ethereum are both worth about one dollar, but they travel on completely separate roads.",
    },
    {
      type: "p",
      text: "The labels describe the token standard on each network:",
    },
    {
      type: "ul",
      items: [
        "**TRC20** is USDT on the Tron network.",
        "**ERC20** is USDT on the Ethereum network.",
        "**BEP20** is USDT on BNB Smart Chain.",
      ],
    },
    { type: "h2", text: "How the main USDT networks compare" },
    {
      type: "table",
      head: ["Network", "Addresses look like", "Fees", "Good to know"],
      rows: [
        ["TRC20 (Tron)", "Start with T", "Usually low", "Widely supported by exchanges for USDT transfers."],
        ["ERC20 (Ethereum)", "Start with 0x", "Can be high when Ethereum is busy", "Often expensive for small amounts."],
        ["BEP20 (BNB Smart Chain)", "Start with 0x", "Usually low", "Same address format as Ethereum, so easy to confuse."],
      ],
    },
    {
      type: "tip",
      title: "Why 0x addresses are risky",
      text: "Ethereum and BNB Smart Chain addresses look exactly the same, because both start with 0x. Your wallet won't stop you from sending BEP20 USDT to an address that expects ERC20. Always choose the network deliberately instead of trusting the address format.",
    },
    { type: "h2", text: "Which network should you use?" },
    {
      type: "p",
      text: "There isn't one right answer. The right network is the one that both your sending wallet and your receiving address support. After that, compare fees:",
    },
    {
      type: "ol",
      items: [
        "**Check what the receiver supports.** On Pyker, the app shows which networks are available for USDT when you generate your deposit address.",
        "**Check what your exchange or wallet supports.** Not every platform offers every network.",
        "**Pick the cheapest network you both support.** The withdrawal screen on your exchange shows the network fee before you confirm.",
        "**Match them exactly.** Send on the same network you chose when you generated the address.",
      ],
    },
    { type: "h2", text: "What happens if you choose the wrong network?" },
    {
      type: "p",
      text: "If you send USDT on a network the receiving address doesn't support, the funds may not arrive and can be lost permanently. Recovery, when it's possible at all, is slow and never guaranteed. That's why the best protection is checking before you send.",
    },
    {
      type: "ul",
      items: [
        "Copy the address directly from the app; never type it by hand.",
        "Confirm the network name on both screens matches.",
        "For a large amount, send a small test first.",
      ],
    },
    { type: "h2", text: "Other USDT networks you may see" },
    {
      type: "p",
      text: "Besides TRC20, ERC20 and BEP20, exchanges may offer USDT on other blockchains, such as Solana or TON. The same rule applies to every one of them: the sending network and the receiving address must match. If a network isn't offered by both sides, don't use it.",
    },
    { type: "h2", text: "How to find the network setting on your exchange" },
    {
      type: "ol",
      items: [
        "Open your exchange and go to **Withdraw** (sometimes called Send).",
        "Select **USDT** as the coin.",
        "Look for a field called **Network** or **Chain**. It's often a dropdown above or below the address field.",
        "Choose the network that matches your receiving address, and check the fee shown for that network.",
      ],
    },
    {
      type: "p",
      text: "Some exchanges try to detect the network from the address you paste. That's helpful, but because Ethereum and BNB Smart Chain addresses look identical, always check the selection yourself.",
    },
    { type: "h2", text: "Quick checklist before you send USDT" },
    {
      type: "ul",
      items: [
        "The network on your exchange matches the network of your deposit address.",
        "The address was copied and pasted, and the first and last characters match.",
        "The amount is above the minimum shown in the app.",
        "You've accounted for the network fee, so the amount that arrives is what you expect.",
      ],
    },
    {
      type: "cta",
      title: "Sell USDT on the network you're using",
      text: "Pick your network in the Pyker app and get a deposit address for it, with the live rate shown first.",
      to: "/sell-usdt",
      label: "Sell USDT on Pyker",
    },
  ],
  faq: [
    {
      question: "Is TRC20 or BEP20 cheaper for sending USDT?",
      answer:
        "Both are usually much cheaper than ERC20. Exact fees change, so compare the network fee your exchange shows on its withdrawal screen before you send.",
    },
    {
      question: "Can I send TRC20 USDT to an ERC20 address?",
      answer:
        "No. TRC20 and ERC20 are different networks, and sending between them can result in lost funds. Always send on the same network as the receiving address.",
    },
    {
      question: "Why do Ethereum and BNB Smart Chain addresses look the same?",
      answer:
        "Both networks use the same address format starting with 0x. That's why you must select the network deliberately, because the address alone doesn't tell you which network it's for.",
    },
    {
      question: "Which USDT networks does Pyker support?",
      answer:
        "The networks available for USDT are shown in the Pyker app when you generate your deposit address. Choose the one you're sending from.",
    },
  ],
};
