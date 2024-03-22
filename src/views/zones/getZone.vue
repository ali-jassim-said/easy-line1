<template>
    <section class="content">
      <main>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>ZoneInfo</h3>
            </div>
            <table v-if="zone">
              <thead>
                <tr>
                  <th>name</th>
                  <th>coordinates</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>{{ zone.name }}</p>
                  </td>
                  <td>
                    <p>{{ zone.coordinates }}</p>
                  </td>
                  <td><router-link :to="{ name: 'updateZone', params: { id: zone.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                  <td><button type="button" class="btn btn-danger" @click="deleteZone(zone.id)">Delete</button></td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No Zones available.</p>
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
        zoneId: null
      };
    },
    mounted() {
        this.zoneId = this.$route.params.id
        this.getZoneInfo(this.zoneId);
    },
    computed:{
      zone() {
        return this.$store.state.getZon.zone || {};
      }
    },
    methods: {
        getZoneInfo(zoneId) {
       this.$store.dispatch('getZoneInfoById', zoneId)
    },
      deleteZone(zoneId) {
        if (confirm('Are you sure you want to delete this zone?')) { // Confirm deletion
          this.$store.dispatch('deleteZoneById', zoneId); // Dispatch action to delete admin
        }
      },
    }
  };
  </script>
  
  <style scoped>
  @import url("../../assets/css/table.css");
  </style>
  
  