import cerrarBtn from '../assets/icons/cerrar.svg'

export const Modal = ({ setModal }) => {
  const handleCloseModal = () => setModal(false)

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={cerrarBtn}
          alt='Botón de cerrar modal'
          onClick={handleCloseModal}
        />
      </div>
    </div>
  )
}
