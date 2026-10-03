const programs = [
  {
    number: '01',
    title: 'Certified Ethical Hacker',
    description:
      'Build practical foundations in ethical hacking, security assessment and authorized security testing.',
    tag: 'RED TEAM',
  },
  {
    number: '02',
    title: 'Splunk Admin & Developer',
    description:
      'Learn SIEM workflows including searching, fields, reports, tables and security-focused analysis.',
    tag: 'SIEM',
  },
  {
    number: '03',
    title: 'SOC Analyst 1',
    description:
      'Develop foundational security operations skills for monitoring, analysis and incident handling.',
    tag: 'BLUE TEAM',
  },
  {
    number: '04',
    title: 'SOC Analyst 2',
    description:
      'Advance your security operations knowledge with deeper defensive security concepts and analysis.',
    tag: 'BLUE TEAM',
  },
  {
    number: '05',
    title: 'CompTIA Security+',
    description:
      'Strengthen your cybersecurity fundamentals across core security concepts and practices.',
    tag: 'SECURITY',
  },
  {
    number: '06',
    title: 'AI-Driven Cyber Security',
    description:
      'Explore the role of AI and modern technologies in cybersecurity operations and defense.',
    tag: 'AI + SECURITY',
  },
]

function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Training Programs
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
            Train for the
            <span className="text-cyan-600 dark:text-cyan-400">
              {' '}
              modern security landscape.
            </span>
          </h2>

          <p className="mt-6 text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
            Structured cybersecurity programs covering offensive security,
            defensive operations, SIEM and AI-driven security.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white hover:shadow-[0_15px_40px_rgba(34,211,238,0.08)] dark:border-white/10 dark:bg-[#0a0f14] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c131a]"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-gray-600 dark:text-gray-400">
                  /{program.number}
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[10px] font-bold tracking-wider text-cyan-700 dark:text-cyan-400">
                  {program.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-950 transition-colors duration-500 dark:text-white">
                {program.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm font-medium leading-7 text-gray-700 transition-colors duration-500 dark:text-gray-300">
                {program.description}
              </p>

              {/* Link */}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-all duration-300 group-hover:gap-3 dark:text-cyan-400">
                Explore Program
                <span>→</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Programs