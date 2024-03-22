import { deleteCap } from "@/api/captain";
import router from "@/router";

export const deleteCaptain = {
    state: {

    },
    mutations: {

    },
    actions: {
        deleteCaptainById(state ,captainId){
            deleteCap(captainId).then( res => {
                if(res.status === 200){
                    router.push({ name: 'captains'})
                    setTimeout(() => {
                        window.location.reload()
                    }, 500);
                }else {
                    console.error("Unexpected response:", res);
                }
            }).catch( err => {
                console.error("Error deleting captain:", err);
            })
        }
    }
}