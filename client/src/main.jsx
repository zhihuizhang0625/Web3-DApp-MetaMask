import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider 
      activeChain="mumbai" 
      clientId="LTt_k8ax9ixjiZEDEnOV4VGDSnPuVu_oTQjomSfvMGFeKq2s6J54emrgANsj2bJdDSlvSoBUDvcyUZDXPUD3eg
      " // You can get a client id from dashboard settings
    >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)