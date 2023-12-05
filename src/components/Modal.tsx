import classes from './Modal.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// interface ComponentProps{
//     children?: React.ReactNode
// };

// function Modal({children}:ComponentProps) {
// function Modal(props: { children: React.ReactNode, onClose: React.MouseEventHandler<HTMLDivElement> | undefined }) {
function Modal(props: { children?: React.ReactNode}) {
    const navigate = useNavigate();
    function closeHandler() {
         navigate('..');
    }
    return (
        <>
            {/*<div className={classes.backdrop} onClick={props.onClose}/>*/}
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>{props.children}</dialog>
        </>
    );
}

export default Modal;