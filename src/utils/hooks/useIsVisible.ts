import {RefObject, useEffect} from 'react';

export const useIsVisible = (callback: () => void, ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const visibleCallback = () => {
      if (!ref.current) {
        return;
      }

      if (ref.current?.getBoundingClientRect().bottom < window.innerHeight) {
        callback();
      }
    };

    document.addEventListener('scroll', visibleCallback);

    return () => document.removeEventListener('scroll', visibleCallback);
  }, [callback, ref]);
};
