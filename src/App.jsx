import { useState } from 'react'
import { Header } from './components/Header'

export const App = () => {
  const [presupuesto, setPresupuesto] = useState('')
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
      />
    </div>
  )
}
