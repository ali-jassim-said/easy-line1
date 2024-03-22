import { updateCaptain } from "@/api/captain";
import router from "@/router";

export const updateCap = {
    state: {

    },
    mutations: {

    },
    actions: {
        updateCapById(state ,payload){
            updateCaptain(payload).then( res => {
                if( res.status == 200){
                    router.push({ name: 'captains'})
                } else {
                    console.error('Unexpected response', res)
                }
            }).catch( err => {
                console.error('error update captain', err)
            })
        }
    }
}