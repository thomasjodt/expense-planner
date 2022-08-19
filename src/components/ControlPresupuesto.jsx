export const ControlPresupuesto = ({ presupuesto }) => {
  const formatBudget = (cantidad) =>
    cantidad.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Gráfica</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto:</span> {formatBudget(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> {formatBudget(0)}
        </p>
        <p>
          <span>Gastado:</span> {formatBudget(0)}
        </p>
      </div>
    </div>
  )
}
