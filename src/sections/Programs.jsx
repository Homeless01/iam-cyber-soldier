const programs = [
  {
    number: '01',
    title: 'Certified Ethical Hacker',
    tag: 'RED TEAM',
    tagColor: 'red',
    description:
      'Build practical foundations in ethical hacking, security assessment, attack methodologies, and authorized penetration testing.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-red-500 dark:text-red-400"
        aria-hidden="true"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Splunk Admin & Developer',
    tag: 'SIEM',
    tagColor: 'cyan',
    description:
      'Learn enterprise SIEM workflows including search processing, field extractions, dashboard reports, indexes, and security-focused analytics.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
        <circle cx="18" cy="9" r="1" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SOC Analyst 1',
    tag: 'BLUE TEAM',
    tagColor: 'cyan',
    description:
      'Develop foundational security operations skills for continuous monitoring, event analysis, triage, and real-time incident handling.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'SOC Analyst 2',
    tag: 'BLUE TEAM',
    tagColor: 'cyan',
    description:
      'Advance your defensive operations with deeper threat investigation, incident response frameworks, MITRE ATT&CK mapping, and triage.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'CompTIA Security+',
    tag: 'SECURITY',
    tagColor: 'blue',
    description:
      'Strengthen your core cybersecurity fundamentals across enterprise architecture, network defense, risk management, and security controls.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'AI-Driven Cyber Security',
    tag: 'AI + SECURITY',
    tagColor: 'cyan',
    description:
      'Explore modern artificial intelligence applications in cybersecurity operations, automated behavioral threat detection, and proactive defense.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
]

function Programs({ onSelectProgram }) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
            Training Programs
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Train for the{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              Modern Cybersecurity Landscape.
            </span>
          </h2>

          <p className="mt-5 text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Structured industrial curricula spanning offensive security, defensive operations, SIEM technologies, and AI-powered detection.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const isRed = program.tagColor === 'red'

            return (
              <article
                key={program.number}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c141d]"
              >
                <div>
                  {/* Top Bar: Number + Tag */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                      /{program.number}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider ${
                        isRed
                          ? 'border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400'
                          : 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'
                      }`}
                    >
                      {program.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`mt-6 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isRed
                        ? 'border-red-500/20 bg-red-500/5 group-hover:scale-105 group-hover:border-red-500/40 group-hover:bg-red-500/10'
                        : 'border-cyan-500/20 bg-cyan-500/5 group-hover:scale-105 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10'
                    }`}
                  >
                    {program.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 transition-colors dark:text-white">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                    {program.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-6 border-t border-slate-200/80 pt-4 dark:border-white/5">
                  <a
                    href="#contact"
                    onClick={() => onSelectProgram?.(program.title)}
                    className="inline-flex items-center gap-2 rounded-md text-xs font-bold uppercase tracking-wider text-cyan-700 transition-all duration-200 group-hover:gap-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-cyan-400 dark:group-hover:text-cyan-300"
                  >
                    <span>Enquire Program</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Programs