import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d0376f1343904542a27fceb4ae647844"
    }
})