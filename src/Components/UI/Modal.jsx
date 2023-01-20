import ReactDOM from 'react-dom';

import Card from './Card';

import classes from './Modal.module.css';

const Overlay = () => {
  return <div className={classes.overlay} />;
};

const ModalOverlay = ({ title, closeModal, children }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h4>{title}</h4>
      </header>
      {children}
      <footer className={classes.actions}>
        <button onClick={closeModal}>Stäng</button>
      </footer>
    </Card>
  );
};

const Modal = ({ closeModal, title, children, onSave }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector('#overlay-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          closeModal={closeModal}
          onSave={onSave}
          children={children}
        />,
        document.querySelector('#modal-root')
      )}
    </>
  );
};

export default Modal;
