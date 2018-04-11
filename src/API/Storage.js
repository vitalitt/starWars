class Storage {
    static setData(key, value) {
        localStorage.setItem(key, value);
    }
    static getData(key) {
        return localStorage.getItem(key);
    }
}

export default Storage;
