import axios from 'axios';
import {memo, useEffect} from 'react';

import {YA_BUTTON_SETTINGS, YA_SCRIPT_SETTINGS} from './consts';
import {AuthButtonType, TokenResponce} from './types';

const AuthButton: AuthButtonType = () => {
  useEffect(() => {
    const timerId = setTimeout(async () => {
      try {
        const res = await (window as any)?.YaAuthSuggest?.init(
          YA_SCRIPT_SETTINGS,
          `${window.location.origin}/auth`,
          YA_BUTTON_SETTINGS
        );

        const data: TokenResponce = await res.handler();

        await axios.post('/api/auth', data);
      } catch (error) {
        console.error('Что-то пошло не так: ', error);
      }
    });

    return () => clearTimeout(timerId);
  }, []);

  return <div id="button" />;
};

export default memo(AuthButton);
