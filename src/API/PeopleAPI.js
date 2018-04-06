import axios from 'axios';

class PeopleAPI {
    static getList() {
        const data = axios.get('https://swapi.co/api/people/').then(res => {
            res.data.from = 'people';
            return res.data;
        });
        return data;
    }
    static getListById(id) {
        const data = axios.get(`https://swapi.co/api/people/${id}/`).then(res => {
            res.data.from = 'people';
            return res.data;
        });
        return data;
    }
}
export default PeopleAPI;
