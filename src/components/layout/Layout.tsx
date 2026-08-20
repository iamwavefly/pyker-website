import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ScrollProgress from "../ui/ScrollProgress";

export default function Layout() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
