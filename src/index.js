import React from 'react';
import ReactDOM from 'react-dom/client';
import UnityGameLaunch from './UnityGameLaunch';

const unity = ReactDOM.createRoot(document.getElementById('unity'));
unity.render(
  <React.StrictMode>
    <UnityGameLaunch />
  </React.StrictMode>
)
