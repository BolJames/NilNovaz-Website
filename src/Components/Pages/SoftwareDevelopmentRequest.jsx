import { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "Website development",
  budget: "",
  details: "",
};

export default function SoftwareDevelopmentRequest() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="request-page px-6 py-16 md:px-10 lg:px-16">
      <div className="request-page__content mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="request-page__eyebrow">Software development</p>
          <h1>Bring your next digital product to life.</h1>
          <p className="request-page__lead">
            Tell us what you are building. Our team can help with websites,
            business software, ecommerce, dashboards, and custom platforms.
          </p>
          <ul className="request-page__list">
            <li><FaCheckCircle /> Website and ecommerce development</li>
            <li><FaCheckCircle /> Custom software and business systems</li>
            <li><FaCheckCircle /> Product design, maintenance, and support</li>
          </ul>
        </div>

        <form className="request-form" onSubmit={handleSubmit}>
          <div className="request-form__grid">
            <label>Name<input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" /></label>
            <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="name@email.com" /></label>
          </div>
          <div className="request-form__grid">
            <label>Company or organization<input name="company" value={form.company} onChange={handleChange} placeholder="Optional" /></label>
            <label>Project type<select name="projectType" value={form.projectType} onChange={handleChange}><option>Website development</option><option>Business software</option><option>Ecommerce platform</option><option>Mobile application</option><option>Other</option></select></label>
          </div>
          <label>Estimated budget<input name="budget" value={form.budget} onChange={handleChange} placeholder="Optional" /></label>
          <label>Project details<textarea name="details" value={form.details} onChange={handleChange} required rows="6" placeholder="What should we build for you?" /></label>
          {submitted && <p className="request-form__success"><FaCheckCircle /> Request received. Our team will contact you soon.</p>}
          <button type="submit">Send request <FaArrowRight /></button>
        </form>
      </div>
    </section>
  );
}
