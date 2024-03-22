<template>
    <v-sheet class="mx-auto mar" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="zone.name"
        label="name"
      ></v-text-field>
      <v-text-field
        v-model="zone.coordinates"
        label="coordinates"
      ></v-text-field>


      <v-btn class="mt-2" type="submit" @click="updateZone()" block>Submit</v-btn>
    </v-form>
  </v-sheet>
  </template>
  <script>
  export default {
    data(){
      return{
        zone: {
          name: '',
        coordinates: ''
        },
        zones: [],
        id: null
      }
    },
    mounted(){
      this.id = this.$route.params.id;
      this.zones = this.$store.state.allZone.Zones || []
      this.loadZone()
    },
    methods:{
      loadZone(){
        if(this.zones.length > 0){
            this.zone = this.zones.find( zon => zon.id == this.id)
        }
      },
      updateZone(){
        this.$store.dispatch('updateZon', { id: this.id, data: this.zone });
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