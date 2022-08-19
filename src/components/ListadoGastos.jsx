import { Gasto } from './Gasto'

export const ListadoGastos = ({ gastos }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos' : 'Aún no hay gastos'}</h2>
      {
        gastos.map(
          gasto =>
            <Gasto props={gasto} key={gasto.id} />
        )
      }
    </div>
  )
}
