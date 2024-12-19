import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-2mq82u3qaot0t6y5.us.auth0.com"
    clientId="Bro6HlYeaUOWNt1AymxzzWmYWkKA7k7F"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
      <App />
  
     </Auth0Provider>
);
reportWebVitals();
