function RedBlue() {
  return (
    <section
      id="red-blue"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Offensive + Defensive Security
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
            Think like an attacker.
            <span className="block text-cyan-600 dark:text-cyan-400">
              Defend like a security professional.
            </span>
          </h2>

          <p className="mt-6 text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
            Understand both sides of modern cybersecurity through practical,
            authorized security training.
          </p>
        </div>

        {/* Red / Blue */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Red Team */}
          <div className="group relative overflow-hidden rounded-3xl border border-red-400/20 bg-red-50/60 p-8 transition-all duration-300 hover:border-red-400/40 hover:shadow-[0_15px_40px_rgba(248,113,113,0.08)] lg:p-10 dark:border-red-400/15 dark:bg-[#0b0809] dark:hover:border-red-400/30">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/5">
                  <span className="h-4 w-4 rounded-full bg-red-400 shadow-[0_0_20px_#f87171]" />
                </div>

                <span className="font-mono text-xs font-semibold text-red-600 dark:text-red-400">
                  RED_TEAM
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-black text-gray-950 transition-colors duration-500 dark:text-white">
                Red Team
              </h3>

              <p className="mt-4 font-medium leading-7 text-gray-700 transition-colors duration-500 dark:text-gray-300">
                Learn how authorized security professionals assess systems,
                identify weaknesses and evaluate an organization's security
                posture.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Security assessment concepts',
                  'Reconnaissance & footprinting',
                  'Vulnerability assessment',
                  'Web application security',
                  'Authorized penetration testing',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-gray-800 transition-colors duration-500 dark:text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Blue Team */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-50/60 p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_15px_40px_rgba(34,211,238,0.08)] lg:p-10 dark:border-cyan-400/15 dark:bg-[#071014] dark:hover:border-cyan-400/30">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5">
                  <span className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                </div>

                <span className="font-mono text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                  BLUE_TEAM
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-black text-gray-950 transition-colors duration-500 dark:text-white">
                Blue Team
              </h3>

              <p className="mt-4 font-medium leading-7 text-gray-700 transition-colors duration-500 dark:text-gray-300">
                Build defensive security knowledge around monitoring,
                detection, analysis and security operations.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'SOC operations',
                  'SIEM & security monitoring',
                  'Threat detection',
                  'Incident response concepts',
                  'Security event analysis',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-gray-800 transition-colors duration-500 dark:text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 text-center transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.02]">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Learn security from both perspectives —{' '}
            <span className="font-bold text-gray-950 dark:text-white">
              attack simulation
            </span>{' '}
            and{' '}
            <span className="font-bold text-gray-950 dark:text-white">
              defensive operations
            </span>.
          </p>
        </div>

      </div>
    </section>
  )
}

export default RedBlue