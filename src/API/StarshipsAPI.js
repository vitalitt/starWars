class StarshipsAPI {
    static getList() {
        const data = fetch('https://swapi.co/api/starships/')
            .then(res => res.json())
            .then(res => {
                res.from = 'starships';
                return res;
            });
        return data;
    }
    static getListById(id) {
        const data = fetch(`https://swapi.co/api/starships/${id}/`)
            .then(res => res.json())
            .then(res => {
                res.from = 'starships';
                return res;
            });
        return data;
    }
}
export default StarshipsAPI;
