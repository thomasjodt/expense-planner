import { formatDate } from '../utils/formatDate'
import { formatBudget } from '../utils/formatBudget'
import IconoAhorro from '../assets/icons/icono_ahorro.svg'
import IconoCasa from '../assets/icons/icono_casa.svg'
import IconoComida from '../assets/icons/icono_comida.svg'
import IconoGastos from '../assets/icons/icono_gastos.svg'
import IconoOcio from '../assets/icons/icono_ocio.svg'
import IconoSalud from '../assets/icons/icono_salud.svg'
import IconoSuscripciones from '../assets/icons/icono_suscripciones.svg'

const iconTypes = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}

export const Gasto = ({ props }) => {
  const { categoria, nombre, fecha, cantidad } = props
  return (
    <div className='gasto sombra'>
    <div className='contenido-gasto'>
      <img src={iconTypes[categoria]} alt={`icono ${categoria}`} />
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
