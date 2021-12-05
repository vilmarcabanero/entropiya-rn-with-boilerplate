export function validateEmail(email) {
  const atpos = email.indexOf('@');
  const dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos - atpos < 2) {
    return false;
  }
  return true;
}
