function Tarjeta({ titulo, descripcion }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-marca">
        {titulo}
      </h3>

      <p className="mt-3 text-gray-600">
        {descripcion}
      </p>
    </article>
  )
}

export default Tarjeta