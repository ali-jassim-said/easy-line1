import { getUser } from "@/api/user";


export const getUSER = { // Changed the name of the store module to deleteAdm for clarity
  state: {
  
  },
  mutations: {
    SET_USER(state,res){
      state.User = res
    }
  },
  actions: {
    getUserInfoById({commit}, payload) {
      getUser(payload) 
          .then((res) => {
            if (res.status === 200) { 
              commit('SET_USER', res.data.data);
            } else {
              console.log("Failed to get user information");
            }
          })
          .catch(err => {
            console.log('Error getting user information:', err);
          });
      }
  }
}