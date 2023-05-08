import {HeaderLinks} from './types';

export const YA_SCRIPT_SETTINGS = {
  client_id: 'd77dee1660984443a3961a2c661f66d9',
  response_type: 'token',
  redirect_uri: typeof window === 'undefined' ? '' : `${window?.location.origin}/auth`
};
export const YA_BUTTON_SETTINGS = {
  view: 'button',
  parentId: 'button',
  buttonView: 'main',
  buttonTheme: 'dark',
  buttonSize: 's',
  buttonBorderRadius: 8
};

export const LINKS: Record<string, HeaderLinks> = {
  true: {
    left: [
      {
        name: 'Главная',
        href: '/'
      },
      {
        name: 'Журнал вызовов',
        href: '/admin/call-manager'
      },
      {
        name: 'Абоненты',
        href: '/admin/clients'
      },
      {
        name: 'Пользователи',
        href: '/admin/users'
      }
    ]
  },
  false: {
    left: [
      {
        name: 'Главная',
        href: '/#'
      }
    ],
    right: [
      {
        name: 'О нас',
        href: '/',
        hash: '#about-us'
      },
      {
        name: 'Клиентам',
        href: '/',
        hash: '#clients'
      },
      {
        name: 'Контакты',
        href: '/',
        hash: '#contacts'
      }
    ]
  }
};
