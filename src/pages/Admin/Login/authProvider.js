// in src/authProvider.js
import { AUTH_LOGIN } from 'react-admin';
import Users from 'services/user'

const authProvider = (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        return Users.authenticate(username, password)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }
    return Promise.resolve();
}

export default authProvider