import { useState } from 'react';
import { Modal, Sidebar } from './components';
import "./App.css";
import { useToggle } from './hooks/useToggle';

export default function App() {

  const {close:closeSidebar, isOpen:isOpenSidebar, open: openSidebar} = useToggle();
  const {close:closeModal, isOpen:isOpenModal, open: openModal} = useToggle();

  return (
    <div className="h-screen w-full">
      <div className="container">
        <Sidebar visible={isOpenSidebar} close={closeSidebar} />
        <h1>Custom Hook</h1>
        <div className="button-container">
          <button onClick={openSidebar}>Open sidebar</button>
          <button onClick={openModal}>Open modal</button>
        </div>
        <Modal visible={isOpenModal} close={closeModal} />
      </div>
    </div>
  );
}
