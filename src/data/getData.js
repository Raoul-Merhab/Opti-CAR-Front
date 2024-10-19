import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getData = async (machine_id, duree) => {
    return await Api.post(Urls.get_machine_data,{
        machine_id: machine_id,
        from:duree
    }).then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        console.log(error);
        return null;
    });
}

export default getData