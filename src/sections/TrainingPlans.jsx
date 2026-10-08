const plans = [
  {
    name: 'Basic',
    price: '₹10,000',
    duration: '1 Month',
    badge: 'Foundation Track',
    description:
      'Start your cybersecurity journey with strong fundamentals, hands-on security concepts, and an introduction to AI-powered cyber defense.',
    features: [
      'Cybersecurity Fundamentals',
      'Networking & Network Security Basics',
      'CIA Triad, Threats & Attack Concepts',
      'Vulnerability Assessment Fundamentals',
      'Password & Authentication Security',
      'Access Control Fundamentals',
      'Web Application Security Basics',
      'Cryptography Fundamentals',
      'Basic Linux & Security Tools',
      'Basic Splunk Investigation',
      'Basic Microsoft Sentinel Investigation',
      'AI-Driven Cybersecurity Fundamentals',
      'Real-World Security Scenarios',
      'Capstone Cybersecurity Projects',
      'Hands-On Practical Exercises',
    ],
  },
  {
    name: 'Advanced',
    price: '₹20,000',
    duration: '3 Months',
    badge: 'Job-Ready Track',
    featured: true,
    description:
      'Build job-ready cybersecurity skills through ethical hacking, SOC investigation, SIEM technologies, and AI-driven security operations.',
    features: [
      'Advanced Cybersecurity Fundamentals',
      'Ethical Hacking Fundamentals',
      'Footprinting & Reconnaissance',
      'Network Scanning & Enumeration',
      'Vulnerability Assessment & Analysis',
      'Network Security & Defense',
      'Web Application Security',
      'Authentication & Access Control',
      'Cryptography & Secure Communication',
      'Linux Security Fundamentals',
      'Splunk Administration & Development',
      'Intermediate Splunk Investigation',
      'Intermediate Microsoft Sentinel Investigation',
      'Security Monitoring & Alert Analysis',
      'Incident Detection & Response Fundamentals',
      'MITRE ATT&CK Fundamentals',
      'Threat Intelligence Fundamentals',
      'AI-Powered SOC & Security Operations',
      'AI-Driven Cybersecurity Concepts',
      'Capstone Cybersecurity Projects',
      'Hands-On Security Labs & Case Studies',
    ],
  },
  {
    name: 'Expert',
    price: '₹40,000',
    duration: '6 Months',
    badge: 'Masterclass Track',
    description:
      'Master advanced cybersecurity, SOC operations, threat hunting, SIEM, incident response, and AI-powered cyber defense through real-world projects.',
    features: [
      'Advanced Ethical Hacking',
      'Advanced Reconnaissance & OSINT',
      'Network Scanning & Enumeration',
      'Advanced Vulnerability Analysis',
      'System & Endpoint Security',
      'Malware & Threat Analysis',
      'Network Sniffing & Traffic Analysis',
      'Advanced Web Application Security',
      'SQL Injection & OWASP Security',
      'Wireless Network Security',
      'Cryptography & Secure Security Practices',
      'Advanced Linux Security',
      'Security Operations Center (SOC) Fundamentals',
      'Advanced Splunk Investigation',
      'Splunk Enterprise Security & Use Cases',
      'Advanced Microsoft Sentinel Investigation',
      'SIEM-Based Threat Detection',
      'Incident Response & Threat Hunting',
      'Threat Intelligence & MITRE ATT&CK',
      'Detection Engineering Fundamentals',
      'Security Automation & SOAR Concepts',
      'AI-Powered SOC Operations',
      'AI Security Analyst / AI Agent Concepts',
      'AI-Driven Threat Detection & Investigation',
      'Real-World Cybersecurity Case Studies',
      'Capstone Cybersecurity Projects',
      'Hands-On Advanced Security Labs',
    ],
  },
]

function TrainingPlans() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 shadow-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-400">
            Training Plans
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Choose Your{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              Learning Path.
            </span>
          </h2>

          <p className="mt-5 text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Structured industrial training options designed for varying timelines and cybersecurity career goals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.featured
                  ? 'border-2 border-cyan-400 bg-white shadow-xl hover:shadow-2xl dark:border-cyan-400/80 dark:bg-[#09121a] dark:shadow-[0_0_50px_rgba(34,211,238,0.12)] dark:hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]'
                  : 'border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-lg dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-white/20'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-950 shadow-md">
                  Featured • Most Popular
                </div>
              )}

              <div>
                {/* Header Row: Name & Duration Pill */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold text-cyan-700 uppercase dark:text-cyan-400">
                      {plan.badge}
                    </span>
                    <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                    {plan.duration}
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    / total fee
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                    plan.featured
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                      : 'border border-slate-300 bg-slate-50 text-slate-900 hover:border-cyan-500 hover:bg-cyan-500/5 hover:text-cyan-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300'
                  }`}
                >
                  <span>Enquire About {plan.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Features Divider */}
                <div className="my-6 border-t border-slate-200 dark:border-white/10" />

                {/* Features Section */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Syllabus &amp; Lab Coverage
                    </span>
                    <span className="font-mono text-[11px] text-cyan-700 dark:text-cyan-400">
                      {plan.features.length} Modules
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-xs sm:max-h-[380px] sm:overflow-y-auto sm:pr-2 scrollbar-thin">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-2.5 w-2.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Help Notice */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Unsure which training plan aligns best with your background?
          </p>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <span>Speak with a training advisor for personalized guidance</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrainingPlans