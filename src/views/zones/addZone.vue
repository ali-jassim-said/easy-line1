<template>
    <v-sheet class="mx-auto mar" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="name"
        label="name"
      ></v-text-field>
      <v-text-field
        v-model="coordinates"
        label="coordinates"
      ></v-text-field>


      <v-btn class="mt-2" type="button" @click="addAZone" block>Submit</v-btn>
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
        coordinates: null
      }
    },
    validations(){
      return{
      name: { required},
      coordinates: { required}
      }
    },
    methods:{
      addAZone(){
        this.v$.$validate()
        if(!this.v$.$error){
          const form = {
            name: this.name,
            coordinates: this.coordinates
          };
          this.$store.dispatch('addZone', form)
        }
      },
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