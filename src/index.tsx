import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './Home/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
