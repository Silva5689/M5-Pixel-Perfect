function Navbar() {
  function cambiarTema() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 p-4">

        <a href="#" className="text-2xl font-bold text-marca dark:text-violet-300">
          FocusDesk
        </a>

        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#ventajas" className="hover:underline">Ventajas</a>
        </div>

        <button
          onClick={cambiarTema}
          className="bg-marca hover:bg-marca-oscuro text-white px-4 py-3 rounded-lg cursor-pointer transition focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          Cambiar tema
        </button>

      </nav>
    </header>
  )
}

export default Navbar