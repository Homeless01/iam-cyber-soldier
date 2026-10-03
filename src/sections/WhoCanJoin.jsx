const audiences = [
  {
    number: '01',
    title: 'Students & Freshers',
    description:
      'Build practical cybersecurity knowledge and understand the fundamentals of modern security operations.',
  },
  {
    number: '02',
    title: 'Working Professionals',
    description:
      'Strengthen your cybersecurity skill set and explore modern offensive and defensive security domains.',
  },
  {
    number: '03',
    title: 'Career Switchers',
    description:
      'Create a structured pathway into cybersecurity with hands-on learning and industry-focused concepts.',
  },
  {
    number: '04',
    title: 'IT Professionals',
    description:
      'Expand existing technical knowledge into security, SOC, SIEM and related cybersecurity domains.',
  },
]

function WhoCanJoin() {
  return (
    <section
      id="who-can-join"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              Who Can Join
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
              Built for people
              <span className="text-cyan-600 dark:text-cyan-400">
                {' '}
                ready to learn.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
            Whether you're starting your cybersecurity journey or expanding
            your existing IT skills, the training is designed around practical
            cybersecurity learning.
          </p>

        </div>

        {/* Audience Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {audiences.map((audience) => (
            <article
              key={audience.number}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)] dark:border-white/10 dark:bg-[#0a0f14] dark:hover:border-cyan-400/25 dark:hover:bg-[#0c131a]"
            >
              <span className="font-mono text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                /{audience.number}
              </span>

              <h3 className="mt-8 text-xl font-bold text-gray-950 transition-colors duration-500 dark:text-white">
                {audience.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-gray-800 transition-colors duration-500 dark:text-gray-300">
                {audience.description}
              </p>
            </article>
          ))}

        </div>

        {/* Requirements */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {/* Basic Computer Knowledge */}
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-50/60 p-6 transition-colors duration-500 dark:border-cyan-400/15 dark:bg-cyan-400/[0.03]">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-700 dark:text-cyan-400">
                ✓
              </div>

              <div>
                <h3 className="font-bold text-gray-950 dark:text-white">
                  Basic computer knowledge
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                  Basic computer knowledge is required to begin the training.
                </p>
              </div>
            </div>
          </div>

          {/* Programming Not Mandatory */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-200 font-bold text-gray-700 dark:bg-white/5 dark:text-gray-300">
                &lt;/&gt;
              </div>

              <div>
                <h3 className="font-bold text-gray-950 dark:text-white">
                  Programming is not mandatory
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                  Programming or coding is not mandatory for joining the
                  training.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhoCanJoin