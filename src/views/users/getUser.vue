<template>
    <section class="content">
      <main>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>userInfo</h3>
            </div>
            <table v-if="user">
              <thead>
                <tr>
                  <th>name</th>
                  <th>number</th>
                  <th>active</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>{{ user.name }}</p>
                  </td>
                  <td>
                    <p>{{ user.phone_number }}</p>
                  </td>
                  <td>
                    <p>{{ user.active }}</p>
                  </td>
                  <td><router-link :to="{ name: 'updateUser', params: { id: user.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                  <td><button type="button" class="btn btn-danger" @click="deleteUser(user.id)">Delete</button></td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No user available.</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userId: null
      };
    },
    mounted() {
        this.userId = this.$route.params.id
        this.getUserInfo(this.userId);
    },
    computed:{
      user() {
        return this.$store.state.getUSER.User || {};
      }
    },
    methods: {
        getUserInfo(userId) {
       this.$store.dispatch('getUserInfoById', userId)
    },
    deleteUser(userId) {
      if (confirm('Are you sure you want to delete this user?')) { // Confirm deletion
        this.$store.dispatch('deleteUserById', userId); // Dispatch action to delete admin
      }
    },
    }
  };
  </script>
  
  <style scoped>
  @import url("../../assets/css/table.css");
  </style>
  
  