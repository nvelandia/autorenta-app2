export const isError = (code) => {
  const digit = parseInt(code.toString()[0], 10);
  return digit === 4 || digit === 5;
};

export const isServer = () => typeof window === 'undefined';

export const isMobile = () => {
  if (!isServer()) {
    return window.matchMedia('(max-width: 575px)').matches;
  }
};

export const isSmallTablet = () => {
  if (!isServer()) {
    return window.matchMedia('(max-width: 750px) and (min-width: 575px)').matches;
  }
};

export const isTablet = () => {
  if (!isServer()) {
    return window.matchMedia('(max-width: 1200px) and (min-width: 751px)').matches;
  }
};
