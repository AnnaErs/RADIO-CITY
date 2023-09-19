import {assign} from 'lodash';
import {memo, useCallback} from 'react';
import {useSearchParams} from 'react-router-dom';

import {filterParser, useQuery} from '@utils/search-params';

import SearchSVG from './SearchSVG.svg';
import {SearchPropsType} from './types';

const Search = memo<SearchPropsType>(function Search() {
  const {search} = useQuery(filterParser);

  const [_, setSearchParams] = useSearchParams();
  const changeFilter = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as any);
      const searchValue = formData.get('search');

      setSearchParams(prev => {
        const objectParams = Object.fromEntries(prev);
        if (!searchValue) {
          delete objectParams.search;
          return objectParams;
        }
        return assign({}, objectParams, {search: searchValue});
      });
    },
    [setSearchParams]
  );

  return (
    <form onSubmit={changeFilter}>
      <div className="relative mb-10 w-1/2">
        <input
          name="search"
          type="search"
          id="default-search"
          className="text-xl block w-full p-2 pl-7 border-2 border-gray outline-none outline rounded-2xl focus:border-2 focus:border-blue min-h-[48px]"
          placeholder="Введите номер или позывной..."
          defaultValue={search}
        />
        <button
          type="submit"
          className="flex absolute justify-center items-center top-0 right-0  text-white bg-blue rounded-r-2xl w-1/6 h-full"
        >
          <SearchSVG />
        </button>
      </div>
    </form>
  );
});

export default memo(Search);
