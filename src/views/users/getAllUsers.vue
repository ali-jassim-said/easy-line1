<template>
    <section class="content">
      <main>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Users table</h3>
              <router-link :to="{ name: 'addUser'}"><button type="button" class="btn btn-primary">Add User</button></router-link>
            </div>
            <table v-if="Users.length > 0">
              <thead>
                <tr>
                  <th>name</th>
                  <th>user</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="User in Users" :key="User.id">
                  <td>
                    <p>{{ User.name }}</p>
                  </td>
                  <td>
                    <p>{{ User.phone_number }}</p>
                  </td>
                  <td>
                    <p>{{ User.active }}</p>
                  </td>
                  <td><router-link :to="{ name: 'updateUser', params: { id: User.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                  <td><router-link :to="{ name: 'getUser', params: {id: User.id}}"><button type="button" class="btn btn-info">Info</button></router-link></td>
                  <td><button type="button" class="btn btn-danger" @click="deleteUser(User.id)">Delete</button></td>
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
      };
    },
    mounted() {
      this.$store.dispatch("getUsers");
    },
    computed:{
      Users() {
        return this.$store.state.allUser.Users || [];
      }
    },
    methods: {
      deleteUser(userId) {
      if (confirm('Are you sure you want to delete this zone?')) { 
        this.$store.dispatch('deleteUserById', userId);
      }
    },
    }
  };
  </script>
  
  <style scoped>
  @import url("../../assets/css/table.css");
  </style>
  
  