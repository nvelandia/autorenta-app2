import Router from 'next/router';
//import { push } from '../../config/history';

export const redirectTo = (path) => {
  Router.push(path);
};

export const pages = {
  home: '/',
  step1: '/step1',
  step2: '/step2',
  step3: '/step3',
  promotion: '/promotion',
};
