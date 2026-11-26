import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ventajas from './components/Ventajas'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-fondo dark:bg-noche font-display text-gray-900 dark:text-gray-100">

      <Navbar />

      <main className="flex-1">
        <Hero />
        <Ventajas />
      </main>

      <Footer />

    </div>
  )
}

export default App