import Tarjeta from './Tarjeta'

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

function Ventajas() {
  return (
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
  )
}

export default Ventajas