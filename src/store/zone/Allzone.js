import { zones } from "@/api/zone"

export const allZone = {
    state: {
    },
    mutations: {
        SET_ZONES(state, zones){
            state.Zones = zones
        }
      },
    actions: {
        getZones({ commit }){
            zones().then((res) => {
                commit('SET_ZONES', res.data.data); 
            }).catch(err => {
              console.log(err)
            })
        }
      },
}
