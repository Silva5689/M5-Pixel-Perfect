import Tarjeta from './components/Tarjeta'

const ventajas = [
  {
    titulo: 'Organiza tus tareas',
    descripcion: 'Ten todas tus tareas pendientes en un mismo lugar.'
  },
  {
    titulo: 'Planifica tu tiempo',
    descripcion: 'Organiza tus sesiones de estudio de forma sencilla.'
  },
  {
    titulo: 'Mejora tu concentración',
    descripcion: 'Reduce las distracciones y céntrate en tus objetivos.'
  }
]

function App() {

  function cambiarTema() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen flex flex-col bg-fondo dark:bg-noche font-display text-gray-900 dark:text-gray-100">

      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 p-4">

          <a href="#" className="text-2xl font-bold text-marca dark:text-violet-300">
            FocusDesk
          </a>

          <div className="hidden md:flex gap-6">
            <a href="#" className="hover:underline">
              Inicio
            </a>
            <a href="#ventajas" className="hover:underline">
              Ventajas
            </a>
          </div>

          <button
            onClick={cambiarTema}
            className="bg-marca hover:bg-marca-oscuro text-white px-4 py-3 rounded-lg cursor-pointer transition focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Cambiar tema
          </button>

        </nav>
      </header>

      <main className="flex-1">

        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center motion-safe:animate-entrada">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Organiza tu tiempo.
            <span className="block text-marca dark:text-violet-300">
              Mejora tu concentración.
            </span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            FocusDesk te ayuda a organizar tus tareas y aprovechar
            mejor tus sesiones de estudio.
          </p>

          <a
            href="#ventajas"
            className="inline-block mt-8 bg-marca hover:bg-marca-oscuro text-white px-6 py-3 rounded-lg transition focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Descubre las ventajas
          </a>

        </section>

        <section id="ventajas" className="max-w-6xl mx-auto px-6 py-seccion">

          <h2 className="text-3xl font-bold text-center mb-8">
            ¿Por qué FocusDesk?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map(ventaja => (
              <Tarjeta
                key={ventaja.titulo}
                titulo={ventaja.titulo}
                descripcion={ventaja.descripcion}
              />
            ))}
          </div>

        </section>

      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6 text-center text-gray-600 dark:text-gray-300">
        <p>© 2026 FocusDesk</p>
      </footer>

    </div>
  )
}

export default App