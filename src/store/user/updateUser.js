import { updateUser } from "@/api/user";
import router from "@/router";
export const updateUsers = {
    state: {
        
      },
      mutations: {
    
      },
    actions: {
        updateUSER(state,payload){
            updateUser(payload)
            .then( res => {
                if(res.status === 200){
                    router.push({ name: 'users'})
                } else {
                    console.log("not update")
                  }
            }).catch(err => {
                console.log("something not right", err)
            })
        }
    }
}