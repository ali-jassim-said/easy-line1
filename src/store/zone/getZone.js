import { getZone } from "@/api/zone";


export const getZon = { // Changed the name of the store module to deleteAdm for clarity
  state: {
  
  },
  mutations: {
    SET_ZONE(state,res){
      state.zone = res
    }
  },
  actions: {
    getZoneInfoById({commit}, payload) {
        getZone(payload) 
          .then((res) => {
            if (res.status === 200) { 
              commit('SET_ZONE', res.data.data);
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