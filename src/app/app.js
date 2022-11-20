import { checker } from './utils/functions/checker';
import { loginButton } from './utils/const/constants';

export const run = loginButton.addEventListener('click', (e) => { //eslint-disable-line
  checker();
});
