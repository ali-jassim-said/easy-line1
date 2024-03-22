import { update } from "@/api/zone";
import router from "@/router";

export const updateZone = {
    state: {
        
      },
      mutations: {
    
      },
    actions: {
        updateZon(state,payload){
            update(payload)
            .then( res => {
                if(res.status === 200){
                    router.push({ name: 'zones'})
                } else {
                    console.log("not update")
                  }
            }).catch(err => {
                console.log("something not right", err)
            })
        }
    }
}