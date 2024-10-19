import Api from "@/api/Api"
import Urls from "@/api/Urls"

const ajouterMachine = async (data) => {
    return await Api.post(Urls.add_machine,data).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

export default ajouterMachine