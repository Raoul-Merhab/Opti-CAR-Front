import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getMachines = async () => {
    return await Api.get(Urls.get_machines).then(res=>{
        return res.data.machines
    }).then(data=>{
        let result = [];
        data.forEach(element => {
            result.push({
                id: element.machine_id,
                name: element.machineType.name
            })
        });
        return result ?? []
    }).catch(err=>{
        console.log(err);
        
        return []
    })
}

export default getMachines