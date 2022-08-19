import { formatDate } from '../utils/formatDate'
import { formatBudget } from '../utils/formatBudget'

export const Gasto = ({ props }) => {
  const { categoria, nombre, fecha, cantidad } = props
  return (
    <div className='gasto sombra'>
    <div className='contenido-gasto'>
      <div className='descripcion-gasto'>
        <p className='categoria'>{categoria}</p>
        <p className='nombre-gasto'>{nombre}</p>
        <p className='fecha-gasto'>
          Agregado el: {''}
          <span>{formatDate(fecha)}</span>
        </p>
      </div>
    </div>
      <p className='cantidad-gasto'>{formatBudget(cantidad)}</p>
    </div>
  )
}
