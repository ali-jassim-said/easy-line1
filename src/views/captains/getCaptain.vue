<template>
    <section class="content">
      <main>
        <div class="table-data">
          <div class="order">
            <table v-if="captains.length > 0">
              <thead>
                <tr>
                  <th>name</th>
                  <th>phone_number</th>
                  <th>car_plate_id</th>
                  <th>car_model</th>
                  <th>car_color</th>
                  <th>car_type</th>
                  <th>passengers_number</th>
                  <th>active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>{{ captain.name }}</p>
                  </td>
                  <td>
                    <p>{{ captain.phone_number }}</p>
                  </td>
                  <td>
                    <p>{{ captain.car_plate_id }}</p>
                  </td>
                  <td>
                    <p>{{ captain.car_model }}</p>
                  </td>
                  <td>
                    <p>{{ captain.car_color }}</p>
                  </td>
                  <td>
                    <p>{{ captain.car_type }}</p>
                  </td>
                  <td>
                    <p>{{ captain.passengers_number }}</p>
                  </td>
                  <td>
                    <p>{{ captain.active }}</p>
                  </td>
                <td><router-link :to="{ name: 'updateCaptain', params: {id: captain.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                  <td><button type="button" class="btn btn-danger" @click="deleteCaptain(captain.id)">Delete</button></td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No captain available.</p>
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
        id: null,
        captain: {},
      };
    },
    mounted() {
      this.id = this.$route.params.id;
      this.loadCaptain()
    },
    computed:{
      captains() {
        return this.$store.state.getCaptains.captains || [];
      }
    },
    methods: {
      loadCaptain(){
        this.captain = this.captains.find( cap => cap.id === this.id)
      },

      deleteCaptain(captainId) {
      if (confirm('Are you sure you want to delete this zone?')) { 
        this.$store.dispatch('deleteCaptainById', captainId);
      }
    },
    }
  };
  </script>
  
  <style scoped>
  @import url("../../assets/css/table.css");
  </style>
  
  