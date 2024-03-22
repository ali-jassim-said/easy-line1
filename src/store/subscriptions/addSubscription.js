import { AddSubscription } from "@/api/subscriptions";
import router from "@/router";

export const addSubs = {
    state: {
      },
    mutations: {
      },
    actions: {
      addSub(state, payload){
            AddSubscription(payload).then((res) => {
                if(res.status === 200){
                  router.push({ name: 'SubscriptionTrip'})
                }
            }).catch(err => {
              console.log(err)
            })
        } 
      },
}
