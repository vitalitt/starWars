class DatabaseLogin {
    static getUser(name) {
        if (DatabaseLogin.users[name]) return DatabaseLogin.users[name];
        return false;
    }
    static setUser(value) {
        DatabaseLogin.users[value] = {
            name: value,
            role: 'user',
        };
    }
}

DatabaseLogin.users = {
    'user_1@gmail.com': {
        name: 'user1',
        role: 'user',
    },
    'user_2@gmail.com': {
        name: 'user2',
        role: 'user',
    },
    'user_3@gmail.com': {
        name: 'user3',
        role: 'user',
    },
    'user_4@gmail.com': {
        name: 'user4',
        role: 'user',
    },
    'user_0@gmail.com': {
        name: 'user_0',
        role: 'admin',
    },
};

export default DatabaseLogin;
