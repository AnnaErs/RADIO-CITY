import {useSearchParams} from 'react-router-dom';

export * from './parsers';

export const addParams = (params: Record<string, unknown>) => {
  return (prev: URLSearchParams) => {
    const objectParams = Object.fromEntries(prev);
    return Object.assign({}, objectParams, params);
  };
};

export type Parsers = Record<string, (val: string | null) => any>;

export const useQuery = <P extends Record<string, (val: string | null) => any>>(
  parsers: P
): {[K in keyof P]: ReturnType<P[K]>} => {
  const [params] = useSearchParams();

  const keys: Array<keyof P> = Object.keys(parsers);
  return keys.reduce<{[K in keyof P]: ReturnType<P[K]>}>((acc, key) => {
    acc[key] = parsers[key]?.(params.get(key.toString()));
    return acc;
  }, {} as any);
};
