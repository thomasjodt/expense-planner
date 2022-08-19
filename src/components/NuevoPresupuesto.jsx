export const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
    <form className='formulario'>
      <div className='campo'>
        <label>Definir Presupuesto</label>
        <input
          className='nuevo-presupuesto'
          type='text'
          placeholder='Añade tu presupuesto'
        />
        <input type='submit' value='Añadir' />
      </div>
    </form>
    </div>
  )
}
