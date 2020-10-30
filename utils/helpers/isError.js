export const isError = (code) => {
  const digit = parseInt(code.toString()[0], 10);
  return digit === 4 || digit === 5;
};

export const isServer = () => typeof window === 'undefined';

export const isMobile = () => {
  if (!isServer()) {
    return window.matchMedia('(max-width: 451px)').matches;
  }
};
