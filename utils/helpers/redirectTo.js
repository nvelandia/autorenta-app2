import Router from 'next/router';

export const redirectTo = (path) => {
  Router.push(path);
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
  termsAndConditions: '/terms-and-conditions',
  agents: '/agents',
  business: '/business',
  onTheGo: '/on-the-go',
};
