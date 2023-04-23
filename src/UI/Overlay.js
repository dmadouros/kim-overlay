import ReactDOM from "react-dom"

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-screen bg-black opacity-50"
      onClick={props.onClose}
    />
  )
}

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 right-0 min-h-screen w-1/4 bg-white z-30 p-4 rounded-l-3xl">
      <div className="absolute inset-y-0 left-4">{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  const portalElement = document.getElementById("overlays")

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
