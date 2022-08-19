import { useState } from 'react'
import cerrarBtn from '../assets/icons/cerrar.svg'
import { Mensaje } from './Mensaje'

export const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const [mensaje, setMensaje] = useState('')

  const handleCloseModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos deben ser llenados obligatoriamente.')
      return
    }
    guardarGasto({ nombre, cantidad, categoria })
    setMensaje('')
    handleCloseModal()
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={cerrarBtn}
          alt='Botón de cerrar modal'
          onClick={handleCloseModal}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {
          mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>
        }
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            id='nombre'
            type='text'
            value={nombre}
            onChange={({ target }) => { setNombre(target.value); setMensaje('') }}
            placeholder='Añade el nombre del gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            id='cantidad'
            type='number'
            value={cantidad}
            onChange={({ target }) => { setCantidad(Number(target.value)); setMensaje('') } }
            placeholder='Añade la cantidad del gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => { setCategoria(e.target.value); setMensaje('') }}
            id='categoria'
          >
            <option disabled value=''>-- Seleccione --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>

        <input
          type='submit'
          value='Añadir el gasto'
        />
      </form>
    </div>
  )
}
