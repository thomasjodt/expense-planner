import { useState } from 'react'
import { Header } from './components/Header'

export const App = () => {
  const [presupuesto, setPresupuesto] = useState('')
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </div>
  )
}
