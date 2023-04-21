import {memo} from 'react';

import {SearchType} from './types';

const Search: SearchType = () =>
  // {name, options, value, disabled}
  {
    return (
      <form>
        <label htmlFor="default-search" className=" sr-only">
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
            <svg
              aria-hidden="true"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    );
  };

export default memo(Search);
