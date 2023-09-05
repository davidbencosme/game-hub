import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6019015e417240bbbe5969baef6aae4e'
    }
})