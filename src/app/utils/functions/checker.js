import {
  realEmail, realPassword, email, password,
} from '../const/constants';

export const checker = () => { //eslint-disable-line
  const emailValue = email.value.toLowerCase();
  const passwordValue = password.value.toLowerCase();

  if (emailValue === realEmail && passwordValue === realPassword) {
    alert('Welcome');
  } else {
    alert('Wrong credentials');
  }
  email.value = '';
  password.value = '';
};
