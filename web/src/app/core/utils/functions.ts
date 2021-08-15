import { NonPayment } from 'src/app/pages/nonpayment/utils';
import { Title } from 'src/app/pages/title/utils';
import { User } from 'src/app/pages/user/utils';

export function isInstanceOfUser(obj: any) {
  return obj instanceof User || obj.name;
}

export function isInstanceOfTitle(obj: any) {
  return obj instanceof Title || (obj.title && !obj.title_id);
}

export function isInstanceOfNonPayment(obj: any) {
  return obj instanceof NonPayment || obj.user_id;
}
