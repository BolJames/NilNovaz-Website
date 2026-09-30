import { Link } from "react-router-dom";
import { FaBoxOpen, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function AccountPage() {
  const { user } = useAuth();
  const { itemCount } = useCart();

  return (
    <main className="account-page min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-4">
          <FaUserCircle className="text-5xl text-orange-400" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">Your account</p>
            <h1 className="text-3xl font-black text-amber-50">Hello, {user.fullName}</h1>
            <p className="text-orange-100/70">{user.email}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Link to="/orders" className="account-page__card rounded-2xl p-6 shadow-sm transition hover:-translate-y-1">
            <FaBoxOpen className="mb-4 text-2xl text-orange-300" />
            <h2 className="font-bold text-amber-50">My orders</h2>
            <p className="mt-2 text-sm text-orange-100/70">Order history and delivery updates.</p>
          </Link>
          <Link to="/products/cart" className="account-page__card rounded-2xl p-6 shadow-sm transition hover:-translate-y-1">
            <FaShoppingCart className="mb-4 text-2xl text-orange-300" />
            <h2 className="font-bold text-amber-50">Shopping cart</h2>
            <p className="mt-2 text-sm text-orange-100/70">{itemCount} item{itemCount === 1 ? "" : "s"} ready for checkout.</p>
          </Link>
          <div className="account-page__card rounded-2xl p-6 shadow-sm">
            <FaUserCircle className="mb-4 text-2xl text-orange-300" />
            <h2 className="font-bold text-amber-50">Profile</h2>
            <p className="mt-2 text-sm text-orange-100/70">Profile settings will connect to your backend account.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
