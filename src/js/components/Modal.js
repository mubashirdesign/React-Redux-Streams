import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
return ReactDOM.createPortal(
<div className="modal" onClick={props.onDismiss}>
    <div className="modal__box" onClick={e => e.stopPropagation()}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        {props.actions}
    </div>
</div>,
document.querySelector('#modal')
);
}

export default Modal;