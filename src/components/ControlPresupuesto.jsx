import { useEffect, useState } from 'react'
import { formatBudget } from '../utils/formatBudget'

export const ControlPresupuesto = ({ gastos, presupuesto }) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
    setGastado(totalGastado)
  }, [gastos])

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
          <span>Disponible:</span> {formatBudget(disponible)}
        </p>
        <p>
          <span>Gastado:</span> {formatBudget(gastado)}
        </p>
      </div>
    </div>
  )
}
