import {memo, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import Container from '@ui-kit/layout/container';
import {cn} from '@utils/cn';

import {HeaderType} from './types';
// import AuthButton from "./AuthButton";
import UserButton from './UserButton';
import {LINKS} from './consts';

const Header: HeaderType = () => {
  const location = useLocation();
  const [isOnTop, setOnTopStatus] = useState(true);

  useEffect(() => {
    const setScrollStatus = () => {
      setOnTopStatus(window?.pageYOffset < 200);
    };

    window?.addEventListener('scroll', setScrollStatus);

    return () => {
      window?.removeEventListener('scroll', setScrollStatus);
    };
  }, []);

  const isAdmin = location.pathname.includes('admin');
  const links = LINKS[isAdmin.toString()];

  return (
    <header
      className={cn('sticky top-0 ease-in-out duration-200 z-10', {
        'bg-white text-black': !!isAdmin,
        'bg-bg text-gray': !isAdmin,
        'shadow-blue': !isOnTop
      })}
    >
      <Container>
        <div className="flex items-center justify-between py-4 text-xl min-h-[70px]">
          <div>
            {links.left?.map(link =>
              link.hash ? (
                <a key={link.hash} href={link.hash} className="mr-12">
                  {link.name}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className="mr-12" target={link.target}>
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center children:ml-12">
            {links.right?.map(link =>
              link.hash ? (
                <a key={link.hash} href={link.hash}>
                  {link.name}
                </a>
              ) : (
                <Link key={link.href} to={link.href} target={link.target}>
                  {link.name}
                </Link>
              )
            )}
            {/* {typeof window !== 'undefined' && <AuthButton />} */}
            <UserButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
