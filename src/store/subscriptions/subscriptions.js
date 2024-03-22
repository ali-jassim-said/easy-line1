import { subscriptions } from "@/api/subscriptions";

export const allSubscription = {
    state: {
    },
    mutations: {
        SET_SUBS(state, allSub){
            state.subscriptions = allSub
        }
      },
    actions: {
        getAllSubscription ({ commit }){
            subscriptions().then((res) => {
                commit('SET_SUBS', res.data.data.data);
            }).catch(err => {
              console.log(err)
            })
        }
      },
}