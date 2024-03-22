import { deleteZone } from "@/api/zone";
import router from "@/router";


export const deleteZon = { 
  state: {

  },
  mutations: {
    
  },
  actions: {
    deleteZoneById( state, zoneId) {
        deleteZone(zoneId)
        .then((res) => {
          if (res.status === 200) { 
            router.push({ name: 'zones'})
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