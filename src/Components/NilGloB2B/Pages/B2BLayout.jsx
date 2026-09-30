import { Outlet } from "react-router-dom";
import B2BNav from "./B2BNav";
import Footer from "../../Footer";
import { B2BCartProvider } from "../../../context/CartContext";

export default function B2BLayout() {
  return (
    <B2BCartProvider>
      <div className="min-h-screen flex flex-col">
        <B2BNav />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </B2BCartProvider>
  );
}