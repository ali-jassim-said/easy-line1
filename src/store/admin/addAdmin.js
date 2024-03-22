
import { addAdmin } from '@/api/admins'



export const addAdm = {
    state: {
      },
    mutations: {
      SET_DIALOG(state, value) {
        state.dialog = value;
      }
      },
    actions: {
        add({commit}, payload){
            addAdmin(payload).then((res) => {
                if(res.status === 201){
                  commit('SET_DIALOG', false);
                }
            }).catch(err => {
              console.log(err)
            })
        } 
      },
}