// Popular services people pay for with the Pyker dollar card. Names only, no
// logos: they're trademarks of their owners and Pyker isn't affiliated.
export const MERCHANTS = ["Apple", "Google", "Netflix", "Udemy", "Claude", "ChatGPT"];

export const MERCHANT_LIST = `${MERCHANTS.slice(0, -1).join(", ")} and ${MERCHANTS[MERCHANTS.length - 1]}`;

export const TRADEMARK_NOTE =
  "Brand names belong to their respective owners. Pyker isn't affiliated with or endorsed by them.";
