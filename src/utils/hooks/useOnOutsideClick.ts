import {useEffect, RefObject} from 'react';

const useOnOutsideClick = (ref: RefObject<HTMLDivElement>, handler?: () => void) => {
  useEffect(() => {
    if (handler) {
      const outsudeClick = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as Node)) {
          handler?.();
        }
      };
      document.addEventListener('mousedown', outsudeClick);
      return () => {
        document.removeEventListener('mousedown', outsudeClick);
      };
    }
  }, [handler]);
};

export default useOnOutsideClick;
