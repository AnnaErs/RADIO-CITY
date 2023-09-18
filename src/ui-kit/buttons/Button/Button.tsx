import {memo} from 'react';

import {ButtonType} from './types';

const Button: ButtonType = ({title, type, children, onClick}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="inline-block text-xl px-5 py-2 bg-white border border-primary ease-in-out duration-200 rounded-xl hover:shadow hover:shadow-primary active:border-pink active:shadow-pink whitespace-nowrap"
    >
      {title || children}
    </button>
  );
};

export default memo(Button);
