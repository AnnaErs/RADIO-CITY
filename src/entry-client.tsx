import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from '@components/app';

const EL_ID = 'root';
const element = document.getElementById(EL_ID);

if (!element) {
  throw new Error(`Element with id=${EL_ID} not found`);
}

const FullApp = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (import.meta.hot) {
  const root = createRoot(element);
  root.render(<FullApp />);
} else {
  hydrateRoot(element, <FullApp />);
}
