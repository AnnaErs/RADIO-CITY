import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import App from '@components/app';

const EL_ID = 'root';
const element = document.getElementById(EL_ID);

if (!element) {
  throw new Error(`Element with id=${EL_ID} not found`);
}

ReactDOM.createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
