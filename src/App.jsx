import { useState } from 'react'
import { Header } from './components/Header'
import iconoNuevoGasto from './assets/icons/nuevo-gasto.svg'
import { Modal } from './components/Modal'
import { generarId } from './utils/generarId'

export const App = () => {
  const [presupuesto, setPresupuesto] = useState('')
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const handleNewSpent = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    setGastos([...gastos, gasto])
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
      />
      {
        isValidPresupuesto && (
          <div className='nuevo-gasto'>
            <img
              src={iconoNuevoGasto}
              alt='Icono de gasto nuevo'
              onClick={handleNewSpent}
            />
          </div>
        )
      }
      {
        modal &&
          <Modal
            guardarGasto={guardarGasto}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            setModal={setModal}
          />
      }
    </div>
  )
}
