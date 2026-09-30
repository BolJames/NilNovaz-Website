const CookiePolicy = () => (
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
            Cookie Policy
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Last updated: September 14, 2026
            </span>
          </div>

          <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
            This Cookie Policy explains how NilNovaz Technologies uses cookies
            and similar browser storage technologies on its website.
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
                href="#what-cookies-do"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                What cookies do
              </a>

              <a
                href="#types"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Types we may use
              </a>

              <a
                href="#your-choices"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Your choices
              </a>

              <a
                href="#updates"
                className="block text-slate-600 transition hover:text-cyan-600"
              >
                Updates
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
            POLICY CONTENT
        -------------------------------------------------- */}
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Introduction */}
          <div className="border-b border-slate-200 p-7 sm:p-10">
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                About cookies
              </p>

              <p className="mt-3 text-base leading-7 text-slate-700">
                Cookies help NilNovaz Technologies provide core website
                functionality, remember your preferences, support account
                sessions, and improve your overall experience.
              </p>
            </div>
          </div>

          {/* What cookies do */}
          <div
            id="what-cookies-do"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                01
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  What cookies do
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Cookies are small files stored by your browser. They help
                  pages load, remember preferences, keep sessions working,
                  support the shopping cart, and show us how the website is
                  used.
                </p>
              </div>
            </div>
          </div>

          {/* Types */}
          <div
            id="types"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                02
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Types we may use
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Essential cookies support core features such as
                  authentication and cart functionality. Preference cookies
                  remember choices such as display or location settings.
                  Analytics cookies, when enabled, help us understand traffic
                  and improve the experience.
                </p>

                {/* Cookie categories */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Essential
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Support authentication, shopping cart functionality,
                      and other core features.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Preferences
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Remember choices such as display and location settings.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                      Analytics
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      When enabled, help us understand traffic and improve the
                      website experience.
                    </p>
                  </div>
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
                03
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your choices
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  You can block or delete cookies through your browser
                  settings. Blocking essential cookies may prevent parts of
                  the website, account, or store from working correctly.
                </p>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <p className="text-sm leading-6 text-amber-800">
                    <span className="font-semibold">Please note:</span>{" "}
                    Disabling essential cookies may affect authentication,
                    shopping cart functionality, and other core website
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div
            id="updates"
            className="scroll-mt-8 border-b border-slate-200 p-7 sm:p-10"
          >
            <div className="flex gap-5">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-600 sm:flex">
                04
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Updates
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  We may update this policy when our website or cookie
                  practices change. The latest version will always be posted on
                  this page.
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
                Questions about cookies?
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                For questions about cookies, email:
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

export default CookiePolicy;