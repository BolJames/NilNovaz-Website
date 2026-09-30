import { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const initialForm = { name: "", email: "", field: "", opportunity: "", message: "" };

export default function CareerOpportunities() {
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
          <p className="request-page__eyebrow">Global opportunities</p>
          <h1>Create your career profile.</h1>
          <p className="request-page__lead">
            Share your goals with NilNovaz and tell us what opportunity you are
            looking for. We connect students and professionals with career,
            learning, and international opportunities.
          </p>
          <ul className="request-page__list">
            <li><FaCheckCircle /> Career and internship opportunities</li>
            <li><FaCheckCircle /> Scholarships and study pathways</li>
            <li><FaCheckCircle /> Mentorship and professional guidance</li>
          </ul>
        </div>

        <form className="request-form" onSubmit={handleSubmit}>
          <div className="request-form__grid">
            <label>Full name<input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" /></label>
            <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="name@email.com" /></label>
          </div>
          <div className="request-form__grid">
            <label>Area of interest<input name="field" value={form.field} onChange={handleChange} required placeholder="Technology, design, business..." /></label>
            <label>Opportunity type<select name="opportunity" value={form.opportunity} onChange={handleChange} required><option value="">Choose one</option><option>Career opportunity</option><option>Internship</option><option>Scholarship</option><option>Study abroad</option><option>Mentorship</option></select></label>
          </div>
          <label>Tell us about your goals<textarea name="message" value={form.message} onChange={handleChange} required rows="6" placeholder="What opportunity are you looking for?" /></label>
          {submitted && <p className="request-form__success"><FaCheckCircle /> Career profile received. We will review your request and contact you.</p>}
          <button type="submit">Create career profile <FaArrowRight /></button>
        </form>
      </div>
    </section>
  );
}
