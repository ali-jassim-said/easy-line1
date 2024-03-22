
import { updateAdmin } from "@/api/admins";
import router from "@/router";
export const updateAdm = { 
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    update( state, payload) {
        updateAdmin(payload)
          .then((res) => {
            if (res.status === 200) { 
              router.push({ name: 'admins'})
            } else {
              console.log("not update")
            }
          })
          .catch(err => {
            console.error('Error updating admin:', err);
          });
      }
    }
  }
