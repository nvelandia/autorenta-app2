import Router from 'next/router';

export const redirectTo = (path) => {
  Router.push(path, undefined, { shallow: true });
};

export const redirectBack = () => {
  Router.back();
};

export const pages = {
  home: '/',
  step1: '/step1',
  step2: '/step2',
  step3: '/step3',
  promotion: '/promotion',
  error: '/error',
  cancellationPolicy: '/cancellation-policy',
  faq: '/faq',
  privacyPolicy: '/privacy-policy',
  cookies: '/cookies',
  agents: '/agents',
  business: '/business',
  onTheGo: '/on-the-go',
  access: 'https://backoffice.autorenta.com/auth/login',
  register: 'https://backoffice.autorenta.com/auth/register',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedIn: 'https://linkedin.com',
  whatsapp: 'https://whatsapp.com',
};
