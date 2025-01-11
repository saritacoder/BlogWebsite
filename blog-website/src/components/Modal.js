// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";

// import "./Modal.css";

// const Backdrop = (props) => {
//   return <div className="modal-backdrop" onClick={props.onClose}></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className="modal-content">
//       <div className="modal-body">{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("modal-root");

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;






import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return <div className="modal-backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-content">
      <div className="modal-body">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
