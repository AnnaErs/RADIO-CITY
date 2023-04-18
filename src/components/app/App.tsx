import {Provider} from 'react-redux';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';

import store from '@utils/reducer/app';
import Home from '@components/pages/home';
import NotFound from '@components/pages/not-found';
import Auth from '@components/pages/auth';
import CallManager from '@components/pages/call-manager';
import UsersManager from '@components/pages/users-manager';
import ClientsManager from '@components/pages/clients-manager';
import Header from '@components/header';
import Footer from '@components/footer';
import {cn} from '@utils/cn';

const App = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin');

  return (
    <div
      className={cn('m-auto w-fit flex flex-col min-h-screen', {
        'bg-bg text-white': !isAdmin
      })}
    >
      <Provider store={store}>
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Navigate to="/admin/call-manager" replace={true} />} />
            <Route path="/admin/call-manager" element={<CallManager />} />
            <Route path="/admin/clients" element={<ClientsManager />} />
            <Route path="/admin/users" element={<UsersManager />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
