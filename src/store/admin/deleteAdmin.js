import { deleteAdmin } from "@/api/admins";
import router from "@/router";


export const deleteAdm = { 
  state: {
  
  },
  mutations: {

  },
  actions: {
    deleteAdminById( state, adminId) { 
      deleteAdmin(adminId) 
        .then((res) => {
          if (res.status === 200) { 
            router.push({ name: 'admins'})
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