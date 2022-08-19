import cerrarBtn from '../assets/icons/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const handleCloseModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
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
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}
