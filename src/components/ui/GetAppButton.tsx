import type { ComponentProps, MouseEvent, ReactNode } from "react";
import Button from "./Button";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../data/links";

/** The store for this device, or null when there isn't one to send it to. */
function storeForDevice() {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return PLAY_STORE_URL;
  // iPadOS reports itself as a Mac, so a touch-capable "Mac" is an iPad.
  const apple = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (apple) return APP_STORE_URL;
  return null;
}

type Props = Pick<ComponentProps<typeof Button>, "variant" | "size" | "icon" | "className"> & {
  children: ReactNode;
  onClick?: () => void;
};

/**
 * "Get the app" that opens the right store for the visitor's phone: Google
 * Play on Android, the App Store on iPhone and iPad once APP_STORE_URL is set.
 * Everyone else (desktop, or iOS before launch) goes to the download section
 * to pick a store. Decided on click, as pre-rendered HTML can't know the device.
 */
export default function GetAppButton({ onClick, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    event.preventDefault();
    const store = storeForDevice();
    if (store) {
      window.location.assign(store);
      return;
    }
    const section = document.getElementById("download");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    else window.location.assign("/#download");
  }

  return <Button {...props} href="/#download" onClick={handleClick} />;
}
