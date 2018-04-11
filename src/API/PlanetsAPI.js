import axios from 'axios';

class PlanetsAPI {
    static getList() {
        const data = axios.get('https://swapi.co/api/planets/').then(res => {
            res.data.from = 'planets';
            return res.data;
        });
        return data;
    }
    static getListById(id) {
        const data = axios.get(`https://swapi.co/api/planets/ ${id} /`).then(res => {
            res.data.from = 'planets';
            return res.data;
        });
        return data;
    }
}
export default PlanetsAPI;
