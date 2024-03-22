import { deleteSub } from "@/api/subscriptions";
import router from "@/router";


export const deleteSubs = { 
  state: {
  
  },
  mutations: {

  },
  actions: {
    deleteSubById( state, adminId) { 
      deleteSub(adminId) 
        .then((res) => {
          if (res.status === 200) { 
            router.push({ name: 'SubscriptionTrip'})
          } else {
            console.log("Failed to delete admin")
          }
        })
        .catch(err => {
          console.error('Error deleting admin:', err);
        });
    }
  }
}