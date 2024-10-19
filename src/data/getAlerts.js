import Api from "@/api/Api"
import Urls from "@/api/Urls"

const Criticality = {
	1:"Low",
	2:"Moderate",
	3:"Critical",
}

const getAlerts = async () => {
    return await Api.get(Urls.get_alerts).then((response) => {
		return response.data
	}).then((data) => {
		let result = []
		data.forEach((alert) => {
			let date = new Date(alert.timestamp);
			result.push({
				timeStamp:date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0'),
				description:alert.name,
				machineId:alert.machineId,
				criticality:Criticality[alert.criticality],
				solved:false
			})
		})
		console.log(result);
		return result
	}).catch((error) => {
		console.log(error)
		return []
	})
	return [
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Critical",
			solved:false
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Moderate",
			solved:false 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Moderate",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:false 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:true 
		},
		{
			timeStamp:"2021-09-01 12:00:00",
			title:"Température élevée",
			description:"Description te3 l’alerte rak chayef, karha vite fait rak chayef, yew, yeewww, hairlain te3 babat merhab",
			machineId:"painting_robot_006",
			criticality:"Low",
			solved:false 
		}
	]
}

export default getAlerts