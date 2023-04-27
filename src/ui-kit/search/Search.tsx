import {memo} from 'react';

import {SearchType} from './types';
import SearchSVG from './SearchSVG.svg';

const Search: SearchType = () => {
  return (
    <form>
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
      <div className="relative mb-10 w-1/2">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 border-2 border-gray outline-none outline rounded-2xl focus:border-2 focus:border-blue "
          placeholder="Введите номер или позывной..."
          required
        />
        <button
          type="submit"
          className="flex absolute justify-center items-center top-0 right-0  text-white bg-blue rounded-r-2xl w-1/6 h-full"
        >
          <SearchSVG />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default memo(Search);
