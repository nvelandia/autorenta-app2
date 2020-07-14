import Router from 'next/router';
//import { push } from '../../config/history';

export const redirectTo = path => {
  Router.push(path);
};

export const pages = {
  home: '/',
};
