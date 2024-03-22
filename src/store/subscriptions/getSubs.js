import { getSub } from "@/api/subscriptions";


export const getSubs = { // Changed the name of the store module to deleteAdm for clarity
  state: {
  },
  mutations: {
    SET_SUB(state,res){
      state.subscription = res
    }
  },
  actions: {
    getSubInfoById({commit}, payload) {
      getSub(payload) 
          .then((res) => {
            if (res.status === 200) { 
              commit('SET_SUB', res.data.data.data);
            } else {
              console.log("Failed to get zone information");
            }
          })
          .catch(err => {
            console.log('Error getting zone information:', err);
          });
      }
  }
}