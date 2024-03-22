import { deleteUser } from "@/api/user";
import router from "@/router";


export const deleteUserId = { 
  state: {

  },
  mutations: {
    
  },
  actions: {
    deleteUserById( state, userId) {
      deleteUser(userId)
        .then((res) => {
          if (res.status === 200) { 
            router.push({ name: 'users'})
            setTimeout(() => {
              window.location.reload();
            }, 500);
          } else {
            console.log("Failed to delete user")
          }
        })
        .catch(err => {
          console.error('Error deleting user:', err);
        });
    }
  }
}