import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:2001/",
    baseURL: "https://dev-connector-mj7b.onrender.com/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt');

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, 
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error?.response?.status === 401){
            localStorage.clear();
            // window.location.assign("/login");
        }
        return Promise.reject(error);
    }
)

export default api;