import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import ScreenSwitchboard from './ScreenSwitchboard';
import LandingPageVideo from '../styles/screens/LandingPageVideo';
import ModalManager from './ModalManager';
import VideoBackground from '../styles/screens/VideoBackground';

import '../styles/screens/app-shell.css';

const AppShell = () => {
  const [modalOpen, setModal] = useState(false);

  const openModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal }
      }
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal('');
  };

  return (
    <BrowserRouter>
    
      <div className="app--shell" onClick={openModal}>
      
        {/* <AppHeader /> */}
        
        <ScreenSwitchboard />
        
        <ModalManager closeFn={closeModal} modal={modalOpen} />
        {/* <AppFooter /> */}
      </div>
    </BrowserRouter>
  );
};

export default AppShell;