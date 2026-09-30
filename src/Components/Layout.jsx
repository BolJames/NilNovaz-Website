import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


function Layout() {
  const { pathname } = useLocation();
  const isProductsPage = pathname === "/products";

  return (
    <>
      <NavBar />

     

      <div className={isProductsPage ? "" : "tech-theme"}>
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;