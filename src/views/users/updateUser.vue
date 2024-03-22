<template>
    <v-sheet class="mx-auto mar back" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="user.name"
        label="name"
      ></v-text-field>
      <v-text-field
        v-model="user.phone_number"
        label="phone__number"
      ></v-text-field>
      <v-switch
        v-model="active"
        label="Active"
        @change="updateActive"
      ></v-switch>
      <v-btn class="mt-2" type="submit" @click="updateUser()" block>Submit</v-btn>
    </v-form>
  </v-sheet>
  </template>
  <script>
  export default {
    data(){
      return{
        user: {
          name: null,
        phone_number: null,
        active: null
        },
        users: [],
        id: null
      }
    },
    mounted(){
      this.id = this.$route.params.id;
      this.users = this.$store.state.allUser.Users || []
      this.loadUser()
    },
    methods:{
      loadUser(){
        if(this.users.length > 0){
            this.user = this.users.find( user => user.id == this.id)
        }
      },
      updateUser(){
        this.$store.dispatch('updateUSER', { id: this.id, data: this.user });
      },

      updateActive() {
      this.active = !this.active;
    }
    }
  
  };
  </script>
  
  <style scoped>
  .mar{
    margin: 10rem 0rem;
    color: black;
  }
  button {
    color: black !important;
  }

</style>