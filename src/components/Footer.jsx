function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white transition-colors duration-500 dark:border-white/10 dark:bg-[#030507]">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10">
                <span className="font-black text-cyan-600 dark:text-cyan-400">
                  I
                </span>
              </div>

              <div>
                <p className="text-sm font-bold tracking-wider text-gray-950 dark:text-white">
                  I AM CYBER
                </p>

                <p className="text-xs font-bold tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  SOLDIER
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-gray-700 dark:text-gray-300">
              Hands-on Cyber Security and AI-driven training designed to
              develop practical skills for the modern security landscape.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-gray-950 dark:text-white">
              Navigate
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#home"
                className="block text-sm font-medium text-gray-700 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#programs"
                className="block text-sm font-medium text-gray-700 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                Programs
              </a>

              <a
                href="#plans"
                className="block text-sm font-medium text-gray-700 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                Training Plans
              </a>

              <a
                href="#trainer"
                className="block text-sm font-medium text-gray-700 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                Trainer
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-950 dark:text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+919588699836"
                className="block text-sm font-medium text-gray-700 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                +91 95886 99836
              </a>

              <a
                href="mailto:training.support@iamcybersoldier.com"
                className="block break-all text-sm font-medium text-gray-700 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                training.support@iamcybersoldier.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs font-medium text-gray-600 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-gray-400">

          <p>
            © {new Date().getFullYear()} I AM CYBER SOLDIER. All rights reserved.
          </p>

          <p>
            Cyber Security Training
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer