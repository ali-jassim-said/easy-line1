<template>
    <v-sheet class="mx-auto mar" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="subscription.current_page"
        label="name"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" @click="updateSubscription()" block>Submit</v-btn>
    </v-form>
  </v-sheet>
  </template>
  <script>
  export default {
    data(){
      return{
        subscription: {
            start_zone_id: this.start_zone_id,
            target_zone_id: this.target_zone_id,
            start_time: this.start_time,
            return_time: this.return_time,
            captain_id: this.captain_id,
            passengers_number: this.passengers_number,
            attendance_days: this.attendance_days
        },
        subscriptions: [],
        id: null
      }
    },
    mounted(){
      this.id = this.$route.params.id;
      this.subscriptions = this.$store.state.allSubscription.subscriptions || []
      this.loadSub()
    },
    methods:{
      loadSub(){
        if(this.subscriptions.length > 0){
            this.subscription = this.subscriptions.find( sub => sub.id == this.id)
        }
      },
      updateSubscription(){
        this.$store.dispatch('updateSubscription', { id: this.id, data: this.subscription });
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