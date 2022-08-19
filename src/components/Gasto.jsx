export const Gasto = ({ props }) => {
  const { cantidad, categoria, nombre } = props
  return (
    <div className='gasto sombra'>
    <div className='contenido-gasto'>
      <div className='descripcion-gasto'>
        <p className='categoria'>{categoria}</p>
        <p className='cantidad-gasto'>{cantidad}</p>
        <p className='nombre-gasto'>{nombre}</p>
      </div>
    </div>
    </div>
  )
}
