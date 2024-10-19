import Cookies from "js-cookie";
class TokenCookies {
    static setToken(token) {
        Cookies.set("token", token, { expires: 1 });
    }
    
    static getToken() {
        return Cookies.get("token");
    }
    
    static removeToken() {
        Cookies.remove("token");
    }
}

export default TokenCookies