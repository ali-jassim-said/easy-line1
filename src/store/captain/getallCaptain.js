import { getCaptain } from "@/api/captain";

export const getCaptains = {
    state: {
        
    },
    mutations: {
        SET_CAPTAINS(state, value){
            state.captains = value
        }
    },
    actions: {
        getCaptains({commit}){
            getCaptain().then(res => {
                if(res.status === 200){
                    commit('SET_CAPTAINS', res.data.data.data)
                } else {
                    console.log('error to get captains')
                }
            }).catch( err => {
                console.log('error catch', err)
            })
        }
    }
}