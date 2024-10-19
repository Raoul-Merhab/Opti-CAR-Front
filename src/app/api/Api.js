import axios from "axios"
import Urls from "./Urls"

const Api = axios.create({
    baseURL: Urls.base_url,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 3000
})

export default Api