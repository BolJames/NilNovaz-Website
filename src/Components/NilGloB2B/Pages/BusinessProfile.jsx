import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaSave,
  FaArrowLeft,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const STORAGE_KEY = "nilnovaz-business-profile";

const initialForm = {
  companyName: "",
  businessType: "",
  registrationNumber: "",
  taxNumber: "",
  country: "",
  city: "",
  address: "",
  phone: "",
  email: "",
  website: "",
};

const countries = [
  "South Sudan",
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Ethiopia",
  "Dubai, UAE",
  "China",
  "India",
  "United Kingdom",
  "Australia",
  "United States",
  "Other",
];

const businessTypes = [
  "Wholesaler",
  "Retailer",
  "Manufacturer",
  "Distributor",
  "Importer",
  "Exporter",
  "Construction Company",
  "Supermarket",
  "Pharmacy",
  "Restaurant",
  "Other",
];

export default function BusinessProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  /*
   * Load existing business profile
   */
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem(STORAGE_KEY);

      if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile);

        setForm({
          ...initialForm,
          ...parsedProfile,
        });
      }
    } catch (error) {
      console.error("Failed to load business profile:", error);
    }
  }, []);

  /*
   * Handle input changes
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    /*
     * Remove error when user starts correcting the field
     */
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    /*
     * Hide success message when editing
     */
    if (success) {
      setSuccess(false);
    }
  };

  /*
   * Validate form
   */
  const validateForm = () => {
    const newErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!form.businessType) {
      newErrors.businessType = "Please select your business type.";
    }

    if (!form.country) {
      newErrors.country = "Please select your country.";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!form.address.trim()) {
      newErrors.address = "Business address is required.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Business phone number is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    /*
     * Website is optional, but if provided it should be valid
     */
    if (form.website.trim()) {
      const website = form.website.trim();

      if (
        !website.startsWith("http://") &&
        !website.startsWith("https://")
      ) {
        newErrors.website =
          "Website must start with http:// or https://";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /*
   * Save profile
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSaving(true);

    try {
      const profile = {
        ...form,

        /*
         * Remove unnecessary spaces
         */
        companyName: form.companyName.trim(),
        registrationNumber: form.registrationNumber.trim(),
        taxNumber: form.taxNumber.trim(),
        city: form.city.trim(),
        address: form.address.trim(),
        phone: form.phone.trim(),
        email: form.email.trim().toLowerCase(),
        website: form.website.trim(),

        updatedAt: new Date().toISOString(),
      };

      /*
       * Save profile locally for now.
       *
       * Later this will be replaced with:
       * POST /api/business-profile
       */
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(profile)
      );

      /*
       * Tell B2BNav that the business profile changed.
       */
      window.dispatchEvent(
        new Event("business-profile-updated")
      );

      setForm(profile);
      setSuccess(true);

      /*
       * Stop loading state
       */
      setSaving(false);

      /*
       * Return to B2B after a short delay
       */
      setTimeout(() => {
        navigate("/b2b");
      }, 1500);
    } catch (error) {
      console.error("Failed to save business profile:", error);

      setSaving(false);

      setErrors({
        form: "Something went wrong while saving your profile. Please try again.",
      });
    }
  };

  /*
   * Reusable input class
   */
  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none transition ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-slate-300 focus:border-cyan-500"
    }`;

  /*
   * Reusable error message
   */
  const ErrorMessage = ({ field }) => {
    if (!errors[field]) return null;

    return (
      <p className="mt-1 text-xs text-red-500">
        {errors[field]}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* =====================================================
            BACK BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => navigate("/b2b")}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-cyan-600"
        >
          <FaArrowLeft />
          Back to NilB2B
        </button>

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mb-8">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
            <FaBuilding className="text-2xl" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Create Your Business Profile
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Add your business information to purchase products
            in bulk, request quotes, manage orders, and use
            NilB2B business services.
          </p>
        </div>

        {/* =====================================================
            SUCCESS MESSAGE
        ====================================================== */}

        {success && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-green-700">
            <FaCheckCircle />

            <div>
              <p className="font-semibold">
                Business profile saved successfully.
              </p>

              <p className="text-sm">
                Returning to NilB2B...
              </p>
            </div>
          </div>
        )}

        {/* =====================================================
            GENERAL ERROR
        ====================================================== */}

        {errors.form && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
            {errors.form}
          </div>
        )}

        {/* =====================================================
            FORM
        ====================================================== */}

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >

          {/* =================================================
              BUSINESS INFORMATION
          ================================================== */}

          <div className="border-b border-slate-200 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                Business Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Tell us about your company or organization.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Company Name */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Company / Business Name
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company or business name"
                    className={`${inputClass(
                      "companyName"
                    )} pl-11`}
                  />
                </div>

                <ErrorMessage field="companyName" />
              </div>

              {/* Business Type */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Type
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className={inputClass("businessType")}
                >
                  <option value="">
                    Select business type
                  </option>

                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <ErrorMessage field="businessType" />
              </div>

              {/* Registration Number */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Registration Number
                </label>

                <div className="relative">
                  <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    name="registrationNumber"
                    value={form.registrationNumber}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={`${inputClass(
                      "registrationNumber"
                    )} pl-11`}
                  />
                </div>
              </div>

              {/* Tax Number */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tax / VAT Number
                </label>

                <input
                  type="text"
                  name="taxNumber"
                  value={form.taxNumber}
                  onChange={handleChange}
                  placeholder="Optional"
                  className={inputClass("taxNumber")}
                />
              </div>

            </div>
          </div>

          {/* =================================================
              BUSINESS LOCATION
          ================================================== */}

          <div className="border-b border-slate-200 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                Business Location
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Where is your business located?
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Country */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Country
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass("country")}
                >
                  <option value="">
                    Select country
                  </option>

                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>

                <ErrorMessage field="country" />
              </div>

              {/* City */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  City
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className={`${inputClass(
                      "city"
                    )} pl-11`}
                  />
                </div>

                <ErrorMessage field="city" />
              </div>

              {/* Address */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Address
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter your complete business address"
                  className={`${inputClass(
                    "address"
                  )} resize-none`}
                />

                <ErrorMessage field="address" />
              </div>

            </div>
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <div className="border-b border-slate-200 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                Contact Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Provide contact details for your business.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Phone
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+211..."
                    className={`${inputClass(
                      "phone"
                    )} pl-11`}
                  />
                </div>

                <ErrorMessage field="phone" />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Email
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="business@example.com"
                    className={`${inputClass(
                      "email"
                    )} pl-11`}
                  />
                </div>

                <ErrorMessage field="email" />
              </div>

              {/* Website */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Website
                </label>

                <div className="relative">
                  <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className={`${inputClass(
                      "website"
                    )} pl-11`}
                  />
                </div>

                <ErrorMessage field="website" />
              </div>

            </div>
          </div>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <div className="flex flex-col-reverse gap-3 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

            <button
              type="button"
              onClick={() => navigate("/b2b")}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <FaArrowLeft />
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Saving...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Business Profile
                </>
              )}
            </button>

          </div>

        </form>

        {/* =====================================================
            FOOTER NOTE
        ====================================================== */}

        <p className="mt-5 text-center text-xs text-slate-500">
          Your business information is used to support your
          NilB2B purchasing and order management.
        </p>

      </div>
    </div>
  );
}