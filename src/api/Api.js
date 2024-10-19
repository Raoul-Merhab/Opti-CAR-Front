import axios from "axios"
import Urls from "./Urls"
import TokenCookies from "@/cookies/TokenCookies"

const Api = axios.create({
    baseURL: Urls.base_url,
    headers: {
        "Content-Type": "application/json",
        Authorization:TokenCookies.getToken()
    },
    // timeout: 3000
})

export default Api