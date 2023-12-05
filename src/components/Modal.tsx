import classes from './Modal.module.css';
import React from 'react';

// interface ComponentProps{
//     children?: React.ReactNode
// };

// function Modal({children}:ComponentProps) {
function Modal(props: { children: React.ReactNode, onClose: React.MouseEventHandler<HTMLDivElement> | undefined }) {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onClose}/>
            <dialog open className={classes.modal}>{props.children}</dialog>
        </>
    );
}

export default Modal;