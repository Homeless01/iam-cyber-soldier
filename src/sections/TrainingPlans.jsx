const plans = [
  {
    name: 'Basic',
    price: '₹10,000',
    duration: '1 Month',
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
    featured: true,
  },

  {
    name: 'Expert',
    price: '₹40,000',
    duration: '6 Months',
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
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Training Plans
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
            Choose your
            <span className="text-cyan-600 dark:text-cyan-400">
              {' '}
              learning path.
            </span>
          </h2>

          <p className="mt-6 text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
            Structured training options designed for different learning
            durations and cybersecurity skill levels.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.featured
                  ? 'border-cyan-400/50 bg-cyan-50/70 shadow-[0_0_50px_rgba(34,211,238,0.08)] dark:border-cyan-400/40 dark:bg-cyan-400/[0.04] dark:shadow-[0_0_50px_rgba(34,211,238,0.06)]'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#0a0f14] dark:hover:border-white/20'
              }`}
            >

              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/30 bg-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 dark:bg-[#071014] dark:text-cyan-400">
                  Extended Learning
                </div>
              )}

              {/* Plan name */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-950 transition-colors duration-500 dark:text-white">
                  {plan.name}
                </h3>

                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">
                  {plan.duration}
                </span>
              </div>

              {/* Price */}
              <div className="mt-8">
                <span className="text-4xl font-black text-gray-950 transition-colors duration-500 dark:text-white">
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 min-h-[72px] text-sm font-medium leading-7 text-gray-700 transition-colors duration-500 dark:text-gray-300">
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-7 rounded-xl px-5 py-3 text-center text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                    : 'border border-gray-300 bg-white text-gray-950 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400'
                }`}
              >
                Enquire About {plan.name}
              </a>

              {/* Divider */}
              <div className="my-7 border-t border-gray-200 dark:border-white/10" />

              {/* Features */}
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Includes
              </p>

              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm font-medium text-gray-800 transition-colors duration-500 dark:text-gray-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Not sure which plan fits your goals?
          </p>

          <a
            href="#contact"
            className="mt-2 inline-block text-sm font-bold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            Talk to a training expert →
          </a>
        </div>

      </div>
    </section>
  )
}

export default TrainingPlans