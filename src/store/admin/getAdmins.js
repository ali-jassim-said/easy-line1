import { getAdmins } from "@/api/admins";

export const admins = {
    state: {
    },
    mutations: {
        SET_ADMINS(state, allAdmin){
            state.allAdmin = allAdmin
        }
      },
    actions: {
        admins({ commit }){
            getAdmins().then((res) => {
                commit('SET_ADMINS', res.data.data); // Commit mutation to save admins' data
            }).catch(err => {
              console.log(err)
            })
        }
      },
}
