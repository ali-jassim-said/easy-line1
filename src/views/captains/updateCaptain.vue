<template>
    <v-sheet class="mx-auto mar" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="captain.name"
        label="name"
      ></v-text-field>
      <v-text-field
        v-model="captain.phone_number"
        label="phone"
      ></v-text-field>
      <v-text-field
        v-model="captain.car_plate_id"
        label="car_plate_id"
      ></v-text-field>
      <v-text-field
        v-model="captain.car_model"
        label="car_model"
      ></v-text-field>
      <v-text-field
        v-model="captain.car_color"
        label="car_color"
      ></v-text-field>
      <v-text-field
        v-model="captain.car_type"
        label="car_type"
      ></v-text-field>
      <v-text-field
        v-model="captain.passengers_number"
        label="passengers_number"
      ></v-text-field>
      <v-switch
        v-model="captain.active"
        label="Active"
        @change="updateActive"
      ></v-switch>
  
      <v-btn class="mt-2" type="button" @click="updateCaptain"  block>Submit</v-btn>
    </v-form>
  </v-sheet>
  </template>
  <script>
  export default {
    data(){
      return{
        captain: {
            name: null,
            phone_number: null,
            car_plate_id: null,
            car_model: null,
            car_color: null,
            car_type: null,
            passengers_number: null,
            active: false
        },
        captains: [],
        id: null
      }
    },
    mounted(){
      this.id = this.$route.params.id
      this.captains = this.$store.state.getCaptains.captains || []
      this.loadCaptain()
    },
    methods:{
        loadCaptain(){
          if(this.captains.length > 0){
            this.captain = this.captains.find( cap => cap.id === this.id)
          }
        },
      updateActive() {
      this.active = !this.active;
    },

    updateCaptain(){
        this.$store.dispatch('updateCapById', { id: this.id, data: this.captain})
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