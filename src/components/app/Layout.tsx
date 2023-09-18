import {Outlet, useLocation} from 'react-router-dom';

import Footer from '@components/footer';
import Header from '@components/header';
import {cn} from '@utils/cn';

const Layout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin');

  return (
    <div
      className={cn('flex flex-col min-h-screen', {
        'bg-bg text-white': !isAdmin
      })}
    >
      <Header />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export {Layout};
