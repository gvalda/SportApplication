const path = (root: string, ...args: string[]) => `${root}${args.join('')}`;

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/inside';

export const PATH_GENERAL = {
  pageNotFound: '/404',
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  trainer: {
    list: path(ROOTS_DASHBOARD, '/trainers'),
    new: path(ROOTS_DASHBOARD, '/trainer/create'),
  },
};
