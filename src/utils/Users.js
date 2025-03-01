export function findUsersByEmail(users, email) {
    let user = users.filter((e) => {
        return e.email === email;
    })
    if (user.length > 0) {
        return user[0];
    } else {
        return null;
    }
}

