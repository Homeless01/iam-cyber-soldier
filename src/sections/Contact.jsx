function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact Information */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
              Ready to build
              <span className="text-cyan-600 dark:text-cyan-400">
                {' '}
                real skills?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
              Talk to the training team to understand the available programs,
              plans and learning options.
            </p>

            <div className="mt-10 space-y-4">

              {/* Phone */}
              <a
                href="tel:+919588699836"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(34,211,238,0.06)] dark:border-white/10 dark:bg-[#0a0f14] dark:hover:border-cyan-400/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-700 dark:text-cyan-400">
                  ☎
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    Phone
                  </p>

                  <p className="mt-1 font-bold text-gray-950 dark:text-white">
                    +91 95886 99836
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:training.support@iamcybersoldier.com"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(34,211,238,0.06)] dark:border-white/10 dark:bg-[#0a0f14] dark:hover:border-cyan-400/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-700 dark:text-cyan-400">
                  @
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    Training Support
                  </p>

                  <p className="mt-1 font-bold text-gray-950 dark:text-white">
                    training.support@iamcybersoldier.com
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-colors duration-500 sm:p-8 dark:border-white/10 dark:bg-[#0a0f14]">

            <div>
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                Send an enquiry
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Tell us what you're looking to learn.
              </p>
            </div>

            <form className="mt-8 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-400"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-400"
                />
              </div>

              {/* Program */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Program
                </label>

                <select
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-[#0b1015] dark:text-gray-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option>Certified Ethical Hacker</option>
                  <option>Splunk Admin & Developer</option>
                  <option>SOC Analyst 1</option>
                  <option>SOC Analyst 2</option>
                  <option>CompTIA Security+</option>
                  <option>AI-Driven Cyber Security</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us about your learning goals..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-400"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-black transition hover:bg-cyan-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]"
              >
                Send Enquiry
              </button>

              <p className="text-center text-xs font-medium text-gray-600 dark:text-gray-400">
                Enquiry submission will be connected to the backend later.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact