import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { ModalContainer, ModalHeader, ModalOverlay, ModalWrapper } from './Modal.style';
import { Button } from '../Button';

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
        <ModalOverlay>
          <ModalWrapper>
            <ModalContainer>
              <ModalHeader>
                <h4>{title}</h4>
                <Button isPrimary onClick={hide}>
                  Cerrar
                </Button>
              </ModalHeader>
              <div>{children}</div>
            </ModalContainer>
          </ModalWrapper>
        </ModalOverlay>
      </>,
      document.body
    )
    : null;
};

export default Modal;
