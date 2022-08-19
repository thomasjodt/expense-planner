import { useState } from 'react'
import { Mensaje } from './Mensaje'

export const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('No es un presupeusto válido')
    } else {
      setMensaje('Es un presupuesto válido')
    }
  }

  const handleChangeNumber = ({ value }) => {
    (Number(value) >= 0) && setPresupuesto(value)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
    <form onSubmit={handlePresupuesto} className='formulario'>
      <div className='campo'>
        <label>Definir Presupuesto</label>
        <input
          className='nuevo-presupuesto'
          type='text'
          placeholder='Añade tu presupuesto'
          value={presupuesto}
          onChange={({ target }) => handleChangeNumber(target)}
        />
        <input type='submit' value='Añadir' />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </div>
    </form>
    </div>
  )
}
