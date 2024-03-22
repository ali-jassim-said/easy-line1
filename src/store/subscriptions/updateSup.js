import { updateSub } from "@/api/subscriptions";
import router from "@/router";

export const updateSubS = {
    state: {
        
      },
      mutations: {
    
      },
    actions: {
        updateSubscription(state,payload){
            updateSub(payload)
            .then( res => {
                if(res.status === 200){
                    router.push({ name: 'SubscriptionTrip'})
                } else {
                    console.log("not update")
                  }
            }).catch(err => {
                console.log("something not right", err)
            })
        }
    }
}