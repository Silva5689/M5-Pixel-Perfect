function Tarjeta({ titulo, descripcion }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">

      <h3 className="text-xl font-bold text-marca dark:text-violet-300">
        {titulo}
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        {descripcion}
      </p>

    </article>
  )
}

export default Tarjeta