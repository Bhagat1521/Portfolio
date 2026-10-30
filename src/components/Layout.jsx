import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import BackToTop from "./BackToTop";
import ScrollManager from "./ScrollManager";

export default function Layout() {
  return (
    <>
      <Loader />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <ScrollManager />
    </>
  );
}
