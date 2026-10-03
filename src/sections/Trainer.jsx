function Trainer() {
  const expertise = [
    'SOC & SIEM',
    'Network & Web VAPT',
    'Threat Detection',
    'Incident Response',
    'Offensive & Defensive Security',
    'AI-Driven Cyber Security',
  ]

  return (
    <section
      id="trainer"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          {/* Profile Visual */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gray-50 p-8 transition-colors duration-500 dark:bg-[#0a0f14]">

              <div className="flex aspect-square items-center justify-center rounded-2xl border border-gray-200 bg-white transition-colors duration-500 dark:border-white/10 dark:bg-[#05070a]">

                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5">
                    <span className="text-4xl font-black text-cyan-600 dark:text-cyan-400">
                      AS
                    </span>
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300">
                    Cyber Security Expert
                  </p>
                </div>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.02]">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Qualification
                  </p>

                  <p className="mt-2 text-sm font-bold text-gray-950 dark:text-white">
                    Ph.D. Cyber Security
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.02]">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-bold text-gray-950 dark:text-white">
                    SOC / SIEM
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              Meet Your Trainer
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
              Ankita
              <span className="block text-cyan-600 dark:text-cyan-400">
                Saraf
              </span>
            </h2>

            <p className="mt-4 text-lg font-bold text-gray-800 transition-colors duration-500 dark:text-gray-200">
              Cyber Security Trainer
            </p>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
              Cyber Security International Corporate Trainer and SOC & SIEM
              Subject Matter Expert with extensive hands-on experience across
              offensive security, defensive security and security operations.
            </p>

            {/* Expertise */}
            <div className="mt-8 flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-800 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Credentials */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors duration-500 dark:border-white/10 dark:bg-[#0a0f14]">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Professional Focus
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                  SOC, SIEM, VAPT, threat detection, incident response and
                  cybersecurity training.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors duration-500 dark:border-white/10 dark:bg-[#0a0f14]">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Certifications
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                  CISM · ISC2 Certified in Cybersecurity · Microsoft AZ-900
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]"
            >
              Talk to the Trainer
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Trainer