import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

export interface ModalInterface {
	isShowing: boolean;
	hide: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal : React.FC<ModalInterface> = ({ isShowing, hide, title, children}) => {
	return isShowing
    ? ReactDOM.createPortal(
      <>
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h4>{title}</h4>
                <button className="modal-close-button" onClick={hide}>
                  Cerrar
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </>,
      document.body
    )
    : null;
};

export default Modal;
