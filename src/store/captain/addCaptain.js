import { addCaptain } from "@/api/captain"
import router from "@/router"

export const addCap = {
    state: {

    },
    mutations: {

    },
    actions: {
        addCapt(state ,payload){
            addCaptain(payload).then(res => {
                if(res.status === 200){
                    router.push({ name: 'captains'})
                } else {
                    console.error("Failed to add captain. Response:", res.data);
            }}).catch( err => {
                console.log(err)
            })
        }
    }
}