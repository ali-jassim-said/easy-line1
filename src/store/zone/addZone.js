import { addZone } from "@/api/zone";
import router from "@/router";

export const addZon = {
    state: {
      },
    mutations: {
      },
    actions: {
        addZone(state, payload){
            addZone(payload).then((res) => {
                if(res.status === 200){
                  router.push({ name: 'zones'})
                }
            }).catch(err => {
              console.log(err)
            })
        } 
      },
}