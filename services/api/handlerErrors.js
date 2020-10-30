import { pages, redirectTo } from '../../utils/helpers/redirectTo';

export const handler = (error) => {
  redirectTo(pages.home);
};
