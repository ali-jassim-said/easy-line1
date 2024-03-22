import router from '@/router'
import {log} from "@/api/auth"



export const login = {
    state: {
        isSign: false,
      },
    mutations: {
        successLogin(state, res){
          localStorage.setItem("token", res.data)
          let token = localStorage.getItem("token")
          state.isSign = true
          if(token){
            router.push({ name: "dashboard"})
          }
        },
    
        failedLogin(state, err){
          state.isSign = false
          console.log(err)
        },

        setSignInState(payload){
          this.state.isSign = payload
        }
      },
    actions: {
        doLogin({state, commit}){
          log()
          .then((res) => {
            if(res === null){
              commit("failedLogin", res)
              console.log(state.isSign)
            }
            commit("successLogin", res)
          }).catch(error => {
            commit("failedLogin", error)
          })
        }
      },
}