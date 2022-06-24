import axios from "axios";

const clientAxios = axios.create({
    baseUrl: process.env.REACT_APP_API_URL
});

export default clientAxios;