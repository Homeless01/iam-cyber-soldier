import { useState } from 'react'

const faqs = [
  {
    question: 'Who can join the cybersecurity training?',
    answer:
      'The training is designed for both freshers and experienced professionals. Basic computer knowledge is required to begin the training.',
  },
  {
    question: 'Do I need programming or coding experience?',
    answer:
      'Programming or coding is not mandatory for joining the training.',
  },
  {
    question: 'Is the training practical?',
    answer:
      'Yes. The training model is structured around 70% practical learning and 30% theory.',
  },
  {
    question: 'What cybersecurity programs are available?',
    answer:
      'Programs include Certified Ethical Hacker, Splunk Admin & Developer, SOC Analyst 1, SOC Analyst 2, CompTIA Security+, and AI-Driven Cyber Security.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'The supplied business information states that an Industrial Training and Internship Certificate is provided after completion of the training.',
  },
  {
    question: 'How can I enquire about a training plan?',
    answer:
      'Use the enquiry form below or contact the training team directly using the phone number or email provided on this website.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      id="faq"
      className="border-t border-gray-200 bg-white py-24 transition-colors duration-500 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 transition-colors duration-500 sm:text-5xl dark:text-white">
            Questions,
            <span className="text-cyan-600 dark:text-cyan-400">
              {' '}
              answered.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-700 transition-colors duration-500 dark:text-gray-300">
            Everything you need to know before starting your cybersecurity
            learning journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:border-cyan-400/30 dark:border-white/10 dark:bg-[#0a0f14]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-bold text-gray-950 transition-colors duration-500 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className="shrink-0 text-xl font-semibold text-cyan-600 dark:text-cyan-400"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-200 px-6 py-5 dark:border-white/10">
                    <p className="text-sm font-medium leading-7 text-gray-700 transition-colors duration-500 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ