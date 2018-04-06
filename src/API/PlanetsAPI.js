class PlanetsAPI {
    static getList() {
        const data = fetch('https://swapi.co/api/planets/')
            .then(res => res.json())
            .then(res => {
                res.from = 'planets';
                return res;
            });
        return data;
    }
    static getListById(id) {
        const data = fetch(`https://swapi.co/api/planets/ ${id} /`)
            .then(res => res.json())
            .then(res => {
                res.from = 'planets';
                return res;
            });
        return data;
    }
}
export default PlanetsAPI;
