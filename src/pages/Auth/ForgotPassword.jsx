import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Password reset instructions have been prepared for this email.");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">Reset Password</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Forgot your password?</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              placeholder="email@example.com"
            />
          </div>

          {message && <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{message}</div>}

          <button type="submit" className="w-full rounded-xl bg-[#04113a] px-4 py-3 font-semibold text-white transition hover:bg-[#0b1f5c]">
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Remembered it? <Link to="/login" className="font-semibold text-cyan-700">Login</Link>
        </p>
      </div>
    </div>
  );
}
