import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import ForWho from './components/ForWho'
import WhatChanges from './components/WhatChanges'
import HowItWorks from './components/HowItWorks'
import ForProviders from './components/ForProviders'
import ProviderDashboard from './components/ProviderDashboard'
import ForPatients from './components/ForPatients'
import SymptomLogging from './components/SymptomLogging'
import Security from './components/Security'
import EarlyAccess from './components/EarlyAccess'
import FAQ from './components/FAQ'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <ForWho />
        <WhatChanges />
        <HowItWorks />
        <ForProviders />
        <ProviderDashboard />
        <ForPatients />
        <SymptomLogging />
        <Security />
        <EarlyAccess />
        <FAQ />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}
