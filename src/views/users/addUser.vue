<template>
    <v-sheet class="mx-auto mar" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="name"
        label="name"
      ></v-text-field>
      <v-text-field
        v-model="phone_number"
        label="phone"
      ></v-text-field>
      <v-switch
        v-model="active"
        label="Active"
        @change="updateActive"
      ></v-switch>
  
      <v-btn class="mt-2" type="button" @click="addUser" block>Submit</v-btn>
    </v-form>
  </v-sheet>
  </template>
  <script>
  import useValidate from '@vuelidate/core';
  import { required} from '@vuelidate/validators'
  export default {
    data(){
      return{
        v$: useValidate(),
        name: null,
        phone_number: null,
        active: false
      }
    },
    validations(){
      return{
      name: { required},
      phone_number: {required},
      active: {required}
      }
    },
    methods:{
      addUser(){
        this.v$.$validate()
        if(!this.v$.$error){
          const form = {
            name: this.name,
            phone_number: this.phone_number,
            active: this.active

          };
          this.$store.dispatch('addAuser', form)
        }
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
  }

  button {
    color: black !important;
  }
</style>