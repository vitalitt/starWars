import Storage from './Storage';

class Logged {
    static checkUserLogin() {
        Storage.setData('login', 'admin');
        if (Storage.getData('login') === 'user' || Storage.getData('login') === 'admin') {
            return true;
        }

        return false;
    }
    static checkAdminLogin() {
        Storage.setData('login', 'admin');
        if (Storage.getData('login') === 'admin') {
            return true;
        }

        return false;
    }
}
export default Logged;
