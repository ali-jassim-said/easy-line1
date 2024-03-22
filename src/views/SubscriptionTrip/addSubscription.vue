<template>
    <v-sheet class="mx-auto mar" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="start_zone_id"
        label="start_zone_id"
      ></v-text-field>
      <v-text-field
        v-model="target_zone_id"
        label="target_zone_id"
      ></v-text-field>
      <v-text-field
        v-model="start_time"
        label="start_time"
      ></v-text-field>
      <v-text-field
        v-model="return_time"
        label="return_time"
      ></v-text-field>
      <v-text-field
        v-model="captain_id"
        label="captain_id"
      ></v-text-field>
      <v-text-field
        v-model="passengers_number"
        label="passengers_number"
      ></v-text-field>
      <v-text-field
        v-model="attendance_days"
        label="attendance_days"
      ></v-text-field>
      <v-btn class="mt-2" type="button" @click="addSubscription" block>Submit</v-btn>
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
        start_zone_id: null,
        target_zone_id: null,
        start_time: null,
        return_time: null,
        captain_id: null,
        passengers_number: null,
        attendance_days: null,
      }
    },
    validations(){
      return{
        start_zone_id: { required},
        target_zone_id: { required},
        start_time: { required},
        return_time: { required},
        captain_id: { required},
        passengers_number: { required},
        attendance_days: { required},
      }
    },
    methods:{
        addSubscription(){
        this.v$.$validate()
        if(!this.v$.$error){
          const form = {
            start_zone_id: this.start_zone_id,
            target_zone_id: this.target_zone_id,
            start_time: this.start_time,
            return_time: this.return_time,
            captain_id: this.captain_id,
            passengers_number: this.passengers_number,
            attendance_days: this.attendance_days
          };
          this.$store.dispatch('addSub', form)
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