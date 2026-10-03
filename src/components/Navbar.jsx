import { useState } from 'react'
import logo from '../assets/Logo.png'
import { useTheme } from '../ThemeContext'

function Navbar() {
  const { darkMode, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        darkMode
          ? 'border-white/10 bg-black/80'
          : 'border-gray-200 bg-white/90'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo + Brand */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center">
            <img
              src={logo}
              alt="I AM CYBER SOLDIER Logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="leading-tight">
            <div
              className={`text-sm font-bold tracking-wider transition-colors ${
                darkMode ? 'text-white' : 'text-gray-950'
              }`}
            >
              I AM CYBER
            </div>

            <div className="text-xs font-bold tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              SOLDIER
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Home
          </a>

          <a
            href="#programs"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Programs
          </a>

          <a
            href="#plans"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Training Plans
          </a>

          <a
            href="#trainer"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Trainer
          </a>

          <a
            href="#faq"
            className={`text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle day and night mode"
            title={darkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-lg transition-all duration-300 ${
              darkMode
                ? 'border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/10'
                : 'border-gray-300 bg-gray-100 hover:border-cyan-400/50 hover:bg-cyan-50'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle day and night mode"
            title={darkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-lg transition-all duration-300 ${
              darkMode
                ? 'border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/10'
                : 'border-gray-300 bg-gray-100 hover:border-cyan-400/50 hover:bg-cyan-50'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${
              darkMode
                ? 'border-white/10 bg-white/5 hover:border-cyan-400/40'
                : 'border-gray-300 bg-gray-100 hover:border-cyan-400/50'
            }`}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 transition-transform ${
                  darkMode ? 'bg-white' : 'bg-gray-950'
                } ${
                  mobileMenuOpen
                    ? 'translate-y-2 rotate-45'
                    : ''
                }`}
              />

              <span
                className={`block h-0.5 w-5 transition-opacity ${
                  darkMode ? 'bg-white' : 'bg-gray-950'
                } ${
                  mobileMenuOpen
                    ? 'opacity-0'
                    : 'opacity-100'
                }`}
              />

              <span
                className={`block h-0.5 w-5 transition-transform ${
                  darkMode ? 'bg-white' : 'bg-gray-950'
                } ${
                  mobileMenuOpen
                    ? '-translate-y-2 -rotate-45'
                    : ''
                }`}
              />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`border-t transition-colors md:hidden ${
            darkMode
              ? 'border-white/10 bg-black/95'
              : 'border-gray-200 bg-white/95'
          }`}
        >
          <nav className="mx-auto max-w-7xl px-6 py-5">

            <div className="flex flex-col gap-1">

              <a
                href="#home"
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  darkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-cyan-600'
                }`}
              >
                Home
              </a>

              <a
                href="#programs"
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  darkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-cyan-600'
                }`}
              >
                Programs
              </a>

              <a
                href="#plans"
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  darkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-cyan-600'
                }`}
              >
                Training Plans
              </a>

              <a
                href="#trainer"
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  darkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-cyan-600'
                }`}
              >
                Trainer
              </a>

              <a
                href="#faq"
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  darkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-cyan-600'
                }`}
              >
                FAQ
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-3 rounded-lg bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300"
              >
                Enquire Now
              </a>

            </div>

          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar