import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const initialForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "user",
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, socialLogin } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    else if (form.fullName.trim().length < 2) nextErrors.fullName = "Full name is too short.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters long.";
    }

    if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (form.role === "admin") {
      nextErrors.role = "Admin access is only available through secure approval.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      await Promise.resolve(
        register({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          role: "user",
        })
      );

      setSuccessMessage("Account created successfully. Redirecting to your account...");
      setTimeout(() => navigate("/account", { replace: true }), 700);
    } catch (error) {
      setErrors({ form: error.message || "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocial = (provider) => {
    try {
      socialLogin(provider);
      navigate("/account", { replace: true });
    } catch (error) {
      setErrors({ form: error.message || "Social login failed." });
    }
  };

  return (
    <div className="auth-page min-h-screen px-4 py-12 text-slate-200">
      <div className="auth-panel mx-auto max-w-6xl overflow-hidden rounded-[32px]">
        <div className="grid md:grid-cols-2">
          <div className="relative hidden min-h-[760px] bg-[#04113a] p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">NilNovaz</div>
              <h1 className="mt-6 text-4xl font-bold leading-tight">Create your account to access the full ecosystem.</h1>
            </div>

            <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold">One account for every NilNovaz module</p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li>• NilStore</li>
                <li>• Global Opportunities</li>
                <li>• Careers</li>
                <li>• NilB2B</li>
              </ul>
            </div>
          </div>

          <div className="auth-form-panel p-6 sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-black-600 font-extrabold">Welcome</p>
                <h2 className="mt-2 text-3xl font-extrabold text-red-600">Create Your NilNovaz Account</h2>
              </div>
              <Link to="/" className="text-sm font-medium text-cyan-700 hover:text-cyan-800">Back to Home</Link>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 font-extrabold">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                  placeholder="name@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                    placeholder="Create a password"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                    placeholder="Re-enter password"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                </div>
              </div>

                
              {errors.form && <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{errors.form}</div>}
              {successMessage && <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{successMessage}</div>}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#04113a] px-4 py-3 font-semibold text-white transition hover:bg-[#0b1f5c] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </motion.button>
            </form>

            <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              <span>OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="space-y-3">
              {[
                { label: "Continue with Google", icon: FaGoogle, color: "border-slate-200 text-slate-700" },
                { label: "Continue with Facebook", icon: FaFacebookF, color: "border-slate-200 text-slate-700" },
                { label: "Continue with LinkedIn", icon: FaLinkedinIn, color: "border-slate-200 text-slate-700" },
              ].map(({ label, icon: Icon, color }) => (
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  key={label}
                  type="button"
                  onClick={() => handleSocial(label.toLowerCase().includes("google") ? "google" : label.toLowerCase().includes("facebook") ? "facebook" : "linkedin")}
                  className={`flex w-full items-center justify-center gap-3 rounded-xl border bg-white px-4 py-3 font-medium shadow-sm transition hover:bg-slate-50 ${color}`}
                >
                  <Icon />
                  {label}
                </motion.button>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account? <Link to="/login" className="font-semibold text-cyan-700 hover:text-cyan-800">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
