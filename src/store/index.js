import { createStore } from 'vuex'
import { login } from './login/login'
import { addAdm } from './admin/addAdmin'
import { admins } from './admin/getAdmins'
import { updateAdm } from './admin/updateAdmin'
import { deleteAdm } from './admin/deleteAdmin'
import { getAdm } from './admin/getAdmin'
import { allZone } from './zone/Allzone'
import { addZon } from './zone/addZone'
import { updateZone } from './zone/updateZone'
import { deleteZon } from './zone/deleteZone'
import { getZon } from './zone/getZone'
import { allSubscription } from './subscriptions/subscriptions'
import { addSubs } from './subscriptions/addSubscription'
import { deleteSubs } from './subscriptions/deleteSubscription'
import { updateSubS } from './subscriptions/updateSup'
import { getSubs } from './subscriptions/getSubs'
import { allUser } from './user/allUsers'
import { deleteUserId } from './user/deleteUser'
import { addUserId } from './user/addUser'
import { updateUsers } from './user/updateUser'
import { getUSER } from './user/getUser'
import { getCaptains } from './captain/getallCaptain'
import { addCap } from './captain/addCaptain'
import { deleteCaptain } from './captain/deleteCaptain'
import { updateCap } from './captain/updateCaptain'


export default createStore({
  state: {
    isSign: false,
    dialog: false,
    allAdmin: [],
    admin: {},
    Zones: [],
    zone: {},
    subscriptions: [],
    subscription: {},
    Users: [],
    User: {},
    captains: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: login,
    admins: admins,
    addAdm: addAdm,
    update: updateAdm,
    delete: deleteAdm,
    getAdm: getAdm,
    allZone: allZone,
    addZon: addZon,
    updateZone: updateZone,
    deleteZon: deleteZon,
    getZon: getZon,
    allSubscription: allSubscription,
    addSubs: addSubs,
    deleteSubs: deleteSubs,
    updateSubS: updateSubS,
    getSubs: getSubs,
    allUser: allUser,
    deleteUserId: deleteUserId,
    addUserId: addUserId,
    updateUsers: updateUsers,
    getUSER: getUSER,
    getCaptains: getCaptains,
    addCap: addCap,
    deleteCaptain: deleteCaptain,
    updateCap: updateCap
  }
})
