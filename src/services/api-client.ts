import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: 'd6d49e8325d44c65bac495769ecfd809'
    }
})