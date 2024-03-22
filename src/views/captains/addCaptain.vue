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
      <v-text-field
        v-model="car_plate_id"
        label="car_plate_id"
      ></v-text-field>
      <v-text-field
        v-model="car_model"
        label="car_model"
      ></v-text-field>
      <v-text-field
        v-model="car_color"
        label="car_color"
      ></v-text-field>
      <v-text-field
        v-model="car_type"
        label="car_type"
      ></v-text-field>
      <v-text-field
        v-model="passengers_number"
        label="passengers_number"
      ></v-text-field>
      <v-switch
        v-model="active"
        label="Active"
        @change="updateActive"
      ></v-switch>
  
      <v-btn class="mt-2" type="button" @click="addCaptain" block>Submit</v-btn>
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
        car_plate_id: null,
        car_model: null,
        car_color: null,
        car_type: null,
        passengers_number: null,
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
        addCaptain(){
        this.v$.$validate()
        if(!this.v$.$error){
          const form = {
            name: this.name,
            phone_number: this.phone_number,
            car_color: this.car_color,
            car_model: this.car_model,
            car_plate_id: this.car_plate_id,
            car_type: this.car_type,
            passengers_number: this.passengers_number,
            active: this.active

          };
          this.$store.dispatch('addCapt', form)
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