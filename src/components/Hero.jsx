function Hero() {
  return (
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
  )
}

export default Hero