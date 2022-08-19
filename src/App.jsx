import { useState } from 'react'
import { Header } from './components/Header'
import iconoNuevoGasto from './assets/icons/nuevo-gasto.svg'
import { Modal } from './components/Modal'

export const App = () => {
  const [presupuesto, setPresupuesto] = useState('')
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNewSpent = () => setModal(true)

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
      {modal && <Modal setModal={setModal} />}
    </div>
  )
}
