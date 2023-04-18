import {memo} from 'react';
import {Link, useLocation} from 'react-router-dom';

import Container from '@ui-kit/layout/container';
import {cn} from '@utils/cn';

import {FooterType} from './types';
import {LINKS} from './consts';

const Footer: FooterType = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin');

  return (
    <footer
      className={cn('ease-in-out duration-200', {
        'bg-white text-black': !!isAdmin,
        'bg-bg text-gray': !isAdmin
      })}
    >
      <Container>
        <div className="flex justify-between">
          <div className="text-lg flex">
            {LINKS.left?.map(link => (
              <Link key={link.href} to={link.href} className="mr-12 p-2 block" target={link.target}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex">
            {LINKS.right?.map(link => (
              <Link key={link.href} to={link.href} className="ml-12 p-2 block" target={link.target}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
