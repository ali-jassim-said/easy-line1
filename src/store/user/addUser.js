import { addUser } from "@/api/user";
import router from "@/router";

export const addUserId = {
    state: {
      },
    mutations: {
      },
    actions: {
        addAuser(state, payload){
          addUser(payload).then((res) => {
                if(res.status === 200){
                  router.push({ name: 'users'})
                }
            }).catch(err => {
              console.log(err)
            })
        } 
      },
}