import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, socialLogin } = useAuth();

  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const user = await login({
        email: form.email,
        password: form.password,
        remember: form.remember,
      });

      const redirectPath = user.role === "admin" ? "/admin/dashboard" : "/account";
      const nextPath = location.state?.from || redirectPath;
      navigate(nextPath, { replace: true });
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocial = async (provider) => {
    try {
      const user = await socialLogin(provider);
      const redirectPath = user.role === "admin" ? "/admin/dashboard" : "/account";
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message || "Social login failed.");
    }
  };

  return (
    <div className="auth-page min-h-screen px-4 py-12">
      <div className="auth-panel mx-auto max-w-5xl overflow-hidden rounded-[32px]">
        <div className="grid md:grid-cols-2">
          <div className="hidden min-h-[680px] bg-[#04113a] p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">NilNovaz</div>
              <h1 className="mt-6 text-4xl font-bold leading-tight">Welcome back to your digital workspace.</h1>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold">Account access across the ecosystem</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>• Store</li>
                <li>• Academy</li>
                <li>• Global Opportunities</li>
                <li>• Studios</li>
              </ul>
            </div>
          </div>

          <div className="auth-form-panel p-6 sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">Login</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Sign in to your account</h2>
              </div>
              <Link to="/" className="text-sm font-medium text-cyan-700 hover:text-cyan-800">Home</Link>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                  placeholder="name@email.com"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
                  Remember me
                </label>
                <Link to="/forgot-password" className="font-medium text-cyan-700 hover:text-cyan-800">Forgot password?</Link>
              </div>

              {error && <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#04113a] px-4 py-3 font-semibold text-white transition hover:bg-[#0b1f5c] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Signing in..." : "Login"}
              </motion.button>
            </form>

            <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              <span>OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="space-y-3">
              {[
                { label: "Continue with Google", icon: FaGoogle },
                { label: "Continue with Facebook", icon: FaFacebookF },
                { label: "Continue with LinkedIn", icon: FaLinkedinIn },
              ].map(({ label, icon: Icon }) => (
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  key={label}
                  type="button"
                  onClick={() => handleSocial(label.toLowerCase().includes("google") ? "google" : label.toLowerCase().includes("facebook") ? "facebook" : "linkedin")}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  <Icon />
                  {label}
                </motion.button>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">
              New to NilNovaz? <Link to="/register" className="font-semibold text-cyan-700 hover:text-cyan-800">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
