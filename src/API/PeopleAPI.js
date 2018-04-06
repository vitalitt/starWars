class PeopleAPI {
    static getList() {
        const data = fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(res => {
                res.from = 'people';
                return res;
            });
        return data;
    }
    static getListById(id) {
        const data = fetch(`https://swapi.co/api/people/${id}/`)
            .then(res => res.json())
            .then(res => {
                res.from = 'people';
                return res;
            });
        return data;
    }
}
export default PeopleAPI;
