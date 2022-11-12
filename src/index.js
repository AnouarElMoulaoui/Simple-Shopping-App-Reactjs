import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './contexts/UserContext';
import { CartPorvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <CartPorvider>
          <App />
        </CartPorvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
