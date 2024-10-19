import Api from "@/app/api/Api"
import Urls from "@/app/api/Urls"

const getMachines = async () => {
    console.log("A");
    
    return await Api.get(Urls.get_machines,{
        headers:{
            Authorization:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MSwiaWF0IjoxNzI5MzU1ODk0LCJleHAiOjE3MjkzNjY2OTR9.ly1Csqa9yOX8lU2EnETt2B81UDT6cWZlCPWofjL3zT4`
        }
    }).then(res=>{
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