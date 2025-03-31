export function findUsersByEmail(users, email) {
  let user = users.filter((e) => {
    return e.email === email;
  });
  if (user.length > 0) {
    return user[0];
  } else {
    return null;
  }
}
export function setIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}
