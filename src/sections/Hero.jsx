function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-20 text-gray-950 transition-colors duration-500 dark:bg-[#05070a] dark:text-white"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-500/10" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              Cyber Security Training
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-gray-950 transition-colors duration-500 sm:text-6xl lg:text-7xl dark:text-white">
            Build
            <span className="text-cyan-600 dark:text-cyan-400">
              {' '}
              Real-World{' '}
            </span>
            Cybersecurity Skills.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-gray-700 transition-colors duration-500 sm:text-lg dark:text-gray-300">
            Hands-on cybersecurity and AI-driven training designed to develop
            practical skills for the modern security landscape.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#programs"
              className="rounded-lg bg-cyan-400 px-7 py-3.5 text-center font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)]"
            >
              Explore Programs
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-400 bg-white px-7 py-3.5 text-center font-bold text-gray-950 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              Talk to an Expert
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-300 pt-7 transition-colors duration-500 dark:border-white/10">
            <div>
              <p className="text-2xl font-black text-gray-950 dark:text-white">
                70%
              </p>

              <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                Practical Training
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-gray-950 dark:text-white">
                RED + BLUE
              </p>

              <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                Team Operations
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-gray-950 dark:text-white">
                AI
              </p>

              <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                Driven Security
              </p>
            </div>
          </div>
        </div>

        {/* Right — Cybersecurity Visual */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Outer Glow */}
          <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Main Dashboard */}
          <div className="relative rounded-3xl border border-cyan-400/20 bg-gray-50/95 p-4 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-colors duration-500 dark:bg-[#081016]/90">

            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-gray-300 px-4 py-3 dark:border-white/10">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>

              <span className="font-mono text-[10px] font-medium text-gray-600 dark:text-gray-400">
                SECURITY_CORE.exe
              </span>
            </div>

            {/* Dashboard */}
            <div className="grid gap-4 p-5 sm:grid-cols-2">

              {/* Threat Status */}
              <div className="rounded-xl border border-cyan-400/15 bg-white p-4 transition-colors duration-500 dark:bg-black/30">
                <p className="text-xs font-bold tracking-wide text-gray-600 dark:text-gray-400">
                  THREAT STATUS
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
                    <span className="text-green-600 dark:text-green-400">
                      ✓
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-green-600 dark:text-green-400">
                      SECURE
                    </p>

                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      Monitoring active
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="rounded-xl border border-cyan-400/15 bg-white p-4 transition-colors duration-500 dark:bg-black/30">
                <p className="text-xs font-bold tracking-wide text-gray-600 dark:text-gray-400">
                  AI ANALYSIS
                </p>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs font-medium">
                    <span className="text-gray-700 dark:text-gray-300">
                      Detection
                    </span>

                    <span className="font-bold text-cyan-600 dark:text-cyan-400">
                      94%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                    <div className="h-full w-[94%] rounded-full bg-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Live Security Operations */}
              <div className="rounded-xl border border-cyan-400/15 bg-white p-4 transition-colors duration-500 sm:col-span-2 dark:bg-black/30">
                <p className="text-xs font-bold tracking-wide text-gray-600 dark:text-gray-400">
                  LIVE SECURITY OPERATIONS
                </p>

                <div className="mt-5 space-y-3 font-mono text-xs">

                  <div className="flex items-center gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      ●
                    </span>

                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Network monitoring initialized
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">
                      ●
                    </span>

                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Threat intelligence analysis active
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      ●
                    </span>

                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Security events being analyzed
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      ●
                    </span>

                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Defensive controls operational
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero