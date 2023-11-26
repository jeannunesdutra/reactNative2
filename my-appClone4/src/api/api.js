
import axios from 'axios'

const api = axios.create({
  baseURL: "https://auth-app-teste.onrender.com"
});

api.interceptors.request.use(
    function (request) {  
        console.log({ 
            url: request.url,
            headers: request.headers 
        })
        return request; 
    }
);


export default api;