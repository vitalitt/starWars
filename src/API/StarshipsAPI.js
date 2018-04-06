import axios from 'axios';

class StarshipsAPI {
    static getList() {
        const data = axios.get('https://swapi.co/api/starships/').then(res => {
            res.data.from = 'starships';
            return res.data;
        });
        return data;
    }
    static getListById(id) {
        const data = axios.get(`https://swapi.co/api/starships/${id}/`).then(res => {
            res.data.from = 'starships';
            return res.data;
        });
        return data;
    }
}
export default StarshipsAPI;
