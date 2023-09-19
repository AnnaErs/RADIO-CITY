import {Provider} from 'react-redux';
import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';

import CallManager from '@components/pages/call-manager';
import ClientsManager from '@components/pages/clients-manager';
import Home from '@components/pages/home';
import NotFound from '@components/pages/not-found';
import store from '@utils/reducer/app';

import {Layout} from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/admin',
        element: <Navigate to="/admin/call-manager" replace={true} />
      },
      {
        path: '/admin/call-manager',
        element: <CallManager />
      },
      {
        path: '/admin/clients',
        element: <ClientsManager />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
