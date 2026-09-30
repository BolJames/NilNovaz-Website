const TermsAndConditions = () => (
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
            Terms & Conditions
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Last updated: September 14, 2026
            </span>
          </div>

          <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
            These Terms & Conditions explain the rules and responsibilities
            that apply when you use NilNovaz Technologies websites, services,
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
                href="#using-services"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Using our services
              </a>

              <a
                href="#products-orders"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Products and orders
              </a>

              <a
                href="#intellectual-property"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Intellectual property
              </a>

              <a
                href="#disclaimers"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Disclaimers & liability
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
            LEGAL DOCUMENT
        -------------------------------------------------- */}
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Introduction */}
          <div className="border-b border-slate-200 p-7 sm:p-10">
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Important
              </p>

              <p className="mt-3 text-base leading-7 text-slate-700">
                By using the NilNovaz website, services, education platforms,
                or store, you agree to these Terms & Conditions. Please do not
                use the services if you do not agree with them.
              </p>
            </div>
          </div>

          {/* Using our services */}
          <div
            id="using-services"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                01
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Using our services
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  You agree to provide accurate information, use the website
                  lawfully, and keep your account credentials secure. You must
                  not interfere with the website, misuse another person's
                  account, or submit harmful or unlawful content.
                </p>
              </div>
            </div>
          </div>

          {/* Products and orders */}
          <div
            id="products-orders"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                02
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Products and orders
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Product availability, descriptions, prices, delivery
                  estimates, and taxes may change. An order is subject to
                  confirmation and availability. We may correct errors or
                  cancel an order where necessary and will communicate material
                  changes when possible.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual property */}
          <div
            id="intellectual-property"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                03
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Intellectual property
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  NilNovaz content, branding, software, text, graphics, and
                  educational materials belong to NilNovaz Technologies or its
                  licensors. You may use them only for personal or expressly
                  authorized business purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div
            id="disclaimers"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                04
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Disclaimers and liability
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Services are provided on an as-available basis. To the
                  extent permitted by law, NilNovaz is not responsible for
                  indirect losses caused by use of the website or delays
                  outside our reasonable control.
                </p>
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
                Questions about these terms?
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Questions about these terms can be sent to:
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

export default TermsAndConditions;