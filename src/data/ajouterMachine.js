import Api from "@/app/api/Api"
import Urls from "@/app/api/Urls"

const ajouterMachine = async (data) => {
    await Api.post(Urls.machines.add_machine,data).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

export default ajouterMachine