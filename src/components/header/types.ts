import {FC} from 'react';

type Link = {
  name: string;
  href: string;
  hash?: string;
  target?: string;
};
type Links = Array<Link>;
export type HeaderLinks = {
  left?: Links;
  right?: Links;
};

type HeaderPropsType = {
  hasToken?: boolean;
};
export type HeaderType = FC<HeaderPropsType>;

export type TokenResponce = {
  access_token: string;
  expires_in: string;
};

type AuthButtonPropsType = {};
export type AuthButtonType = FC<AuthButtonPropsType>;
