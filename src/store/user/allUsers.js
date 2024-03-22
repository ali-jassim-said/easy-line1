import { users } from "@/api/user";


export const allUser = {
    state: {
    },
    mutations: {
        SET_USERS(state, user){
            state.Users = user
        }
      },
    actions: {
        getUsers({ commit }){
            users().then((res) => {
                commit('SET_USERS', res.data.data.data); 
            }).catch(err => {
              console.log(err)
            })
        }
      },
}
