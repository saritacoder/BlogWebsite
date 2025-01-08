import React from "react";
import ReactDOM from "react-dom";

const ModalOverlay = ({ children, onClose }) => {

    function handleOverlay(){
    onClose()
    }


  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlay}>
        <button onClick={handleOverlay}>click</button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalOverlay;
