function PracticalTraining() {
  const steps = [
    {
      number: '01',
      title: 'Learn',
      description:
        'Understand the security concepts, tools and workflows behind modern cybersecurity.',
    },
    {
      number: '02',
      title: 'Practice',
      description:
        'Apply concepts through hands-on exercises and controlled security environments.',
    },
    {
      number: '03',
      title: 'Analyze',
      description:
        'Study security events, vulnerabilities and operational scenarios.',
    },
    {
      number: '04',
      title: 'Defend',
      description:
        'Develop defensive thinking through monitoring, detection and response concepts.',
    },
  ]

  return (
    <section
      id="practical"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              Learning Approach
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
              Learn less by
              <span className="text-cyan-600 dark:text-cyan-400">
                {' '}
                watching.
              </span>
              <br />
              Learn more by doing.
            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
              Training is designed around practical exposure so learners can
              connect cybersecurity concepts with real-world security
              operations.
            </p>
          </div>

          {/* 70 / 30 */}
          <div className="relative rounded-3xl border border-gray-200 bg-gray-50 p-7 transition-all duration-500 hover:border-cyan-400/30 sm:p-9 dark:border-white/10 dark:bg-[#0a0f14]">

            <div className="flex items-end justify-between gap-6">

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Training Model
                </p>

                <p className="mt-2 text-4xl font-black text-gray-950 dark:text-white">
                  70%
                  <span className="ml-2 text-base font-semibold text-gray-700 dark:text-gray-300">
                    Practical
                  </span>
                </p>
              </div>

              <p className="text-2xl font-black text-gray-700 dark:text-gray-300">
                30%
                <span className="ml-1 text-sm font-semibold">
                  Theory
                </span>
              </p>

            </div>

            {/* Progress */}
            <div className="mt-7 h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
              <div className="h-full w-[70%] rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
            </div>

            <div className="mt-4 flex justify-between text-xs font-semibold">
              <span className="text-cyan-700 dark:text-cyan-400">
                Hands-on practice
              </span>

              <span className="text-gray-700 dark:text-gray-300">
                Conceptual foundation
              </span>
            </div>

          </div>
        </div>

        {/* Learning Process */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)] dark:border-white/10 dark:bg-[#0a0f14] dark:hover:border-cyan-400/25 dark:hover:bg-[#0c131a]"
            >
              <span className="font-mono text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                /{step.number}
              </span>

              <h3 className="mt-7 text-xl font-bold text-gray-950 transition-colors duration-500 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-gray-700 transition-colors duration-500 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-50/60 p-6 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between dark:border-cyan-400/10 dark:bg-cyan-400/[0.03]">
          <div>
            <p className="font-bold text-gray-950 dark:text-white">
              Practical cybersecurity exposure.
            </p>

            <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Designed for learners building skills for modern security roles.
            </p>
          </div>

          <a
            href="#plans"
            className="whitespace-nowrap text-sm font-bold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            View Training Plans →
          </a>
        </div>

      </div>
    </section>
  )
}

export default PracticalTraining