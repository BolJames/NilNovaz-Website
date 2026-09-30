const PrivacyPolicy = () => (
  <section className="min-h-screen bg-slate-50 text-slate-700">
    {/* =====================================================
        HEADER
    ====================================================== */}
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            NilNovaz Technologies
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Last updated: September 14, 2026
            </span>
          </div>

          <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
            This Privacy Policy explains how NilNovaz Technologies collects,
            uses, and protects information when you use our website, services,
            education platforms, and store.
          </p>
        </div>
      </div>
    </div>

    {/* =====================================================
        CONTENT
    ====================================================== */}
    <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

        {/* -------------------------------------------------
            TABLE OF CONTENTS
        -------------------------------------------------- */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              On this page
            </p>

            <nav className="space-y-3 text-sm">
              <a
                href="#information-we-collect"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Information we collect
              </a>

              <a
                href="#how-we-use"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                How we use information
              </a>

              <a
                href="#sharing-security"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Sharing & security
              </a>

              <a
                href="#your-choices"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Your choices
              </a>

              <a
                href="#contact"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Contact
              </a>
            </nav>
          </div>
        </aside>

        {/* -------------------------------------------------
            PRIVACY POLICY
        -------------------------------------------------- */}
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Introduction */}
          <div className="border-b border-slate-200 p-7 sm:p-10">
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Your privacy matters
              </p>

              <p className="mt-3 text-base leading-7 text-slate-700">
                We aim to handle personal information responsibly and use it
                only for legitimate purposes connected with providing and
                improving NilNovaz services.
              </p>
            </div>
          </div>

          {/* Information we collect */}
          <div
            id="information-we-collect"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                01
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Information we collect
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  We may collect information you provide directly, such as
                  your name, email address, phone number, shipping details,
                  account information, and messages sent through our forms. We
                  also collect basic device and usage information needed to
                  operate and improve the website.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Information you provide
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Name, email, phone number, shipping details, account
                      information, and messages submitted through our forms.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Device & usage information
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Basic information needed to operate, maintain, and
                      improve the website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How we use information */}
          <div
            id="how-we-use"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                02
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  How we use information
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  We use information to provide requested services, process
                  orders, respond to enquiries, maintain accounts, improve our
                  products, prevent misuse, and communicate important service
                  updates.
                </p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Our purposes may include:
                  </p>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• Providing requested services</li>
                    <li>• Processing orders</li>
                    <li>• Responding to enquiries</li>
                    <li>• Maintaining user accounts</li>
                    <li>• Improving our products and services</li>
                    <li>• Preventing misuse</li>
                    <li>• Communicating important service updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sharing and security */}
          <div
            id="sharing-security"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                03
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Sharing and security
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  We do not sell personal information. We may share limited
                  information with service providers who help us host the
                  website, process payments, deliver orders, or provide
                  requested services. We use reasonable safeguards, but no
                  internet transmission can be guaranteed completely secure.
                </p>

                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-sm leading-6 text-emerald-800">
                    <span className="font-semibold">
                      Our commitment:
                    </span>{" "}
                    We do not sell personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your choices */}
          <div
            id="your-choices"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                04
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your choices
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  You may contact us to request access, correction, or
                  deletion of your personal information, subject to legal and
                  operational requirements.
                </p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    If you would like to make a privacy-related request, please
                    contact us using the email address provided below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="scroll-mt-8 bg-slate-50 p-7 sm:p-10"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                05 · Contact
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Privacy questions?
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                For privacy questions, email:
              </p>

              <a
                href="mailto:nilnovaztech.26.ss@gmail.com"
                className="mt-4 inline-flex font-semibold text-cyan-600 transition hover:text-cyan-700 hover:underline"
              >
                nilnovaztech.26.ss@gmail.com
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;