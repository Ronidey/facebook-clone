import React from 'react';

function Modal({ show, onClose, maxWidth, children }) {
  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.45)',
    zIndex: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const modalContainerStyles = {
    background: '#fff',
    borderRadius: '6px',
    width: '90%',
    boxShadow: '0 0 30px -5px rgba(0, 0, 0, 0.25)',
    overflowX: 'hidden',
    maxWidth: maxWidth || 'initial',
    maxHeight: '90vh',
    overflowY: 'auto'
  };

  const handleClick = (e) => {
    if (e.currentTarget != e.target) return;
    onClose();
  };

  return (
    <>
      {show && (
        <div style={modalStyles} onClick={handleClick}>
          <div style={modalContainerStyles}>{children}</div>
        </div>
      )}
    </>
  );
}

export default Modal;
