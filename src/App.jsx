function App() {
  return (
    <div className="min-h-screen bg-fondo font-display text-gray-900">

      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">

          <a href="#" className="text-2xl font-bold text-marca">
            FocusDesk
          </a>

          <div className="hidden md:flex gap-6">
            <a href="#" className="hover:text-marca">
              Inicio
            </a>
            <a href="#ventajas" className="hover:text-marca">
              Ventajas
            </a>
          </div>

        </nav>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Organiza tu tiempo.
            <span className="block text-marca">
              Mejora tu concentración.
            </span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg text-gray-600">
            FocusDesk te ayuda a organizar tus tareas y aprovechar
            mejor tus sesiones de estudio.
          </p>

          <a
            href="#ventajas"
            className="inline-block mt-8 bg-marca hover:bg-marca-oscuro text-white px-6 py-3 rounded-lg transition"
          >
            Descubre las ventajas
          </a>

        </section>
      </main>

    </div>
  )
}

export default App