import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

import Hero from './sections/Hero'
import Programs from './sections/Programs'
import RedBlue from './sections/RedBlue'
import PracticalTraining from './sections/PracticalTraining'
import TrainingPlans from './sections/TrainingPlans'
import Trainer from './sections/Trainer'
import WhoCanJoin from './sections/WhoCanJoin'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <Navbar />

      <main>
        <Hero />
        <Programs />
        <RedBlue />
        <PracticalTraining />
        <TrainingPlans />
        <Trainer />
        <WhoCanJoin />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <Chatbot />
    </div>
  )
}

export default App