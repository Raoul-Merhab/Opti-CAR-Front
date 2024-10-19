import Api from '@/api/Api'
import Urls from '@/api/Urls'

const handleLogin = async (email, password) => {
    return await Api.post(Urls.login, {
        email: email,
        password: password
    }).then(res => {
        return {
            status:true,
            data:res.data
        }
    }).catch(err => {
        return {
            status:false,
            error:err
        }
    })
}

export default handleLogin