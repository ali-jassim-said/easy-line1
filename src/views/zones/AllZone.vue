<template>
  <section class="content">
    <main>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Zones table</h3>
            <router-link :to="{ name: 'addZone'}"><button type="button" class="btn btn-primary">Add zone</button></router-link>
          </div>
          <table v-if="zones.length > 0">
            <thead>
              <tr>
                <th>name</th>
                <th>coordinates</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="zone in zones" :key="zone.id">
                <td>
                  <p>{{ zone.name }}</p>
                </td>
                <td>
                  <p>{{ zone.coordinates }}</p>
                </td>
                <td><router-link :to="{ name: 'updateZone', params: { id: zone.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                <td><router-link :to="{ name: 'getZone', params: { id: zone.id}}"><button type="button" class="btn btn-info">getZone</button></router-link></td>
                <td><button type="button" class="btn btn-danger" @click="deleteZone(zone.id)">Delete</button></td>
              </tr>
            </tbody>
          </table>
          <div v-else>
            <p>No Zones available.</p> <!-- Display a message when no admins are available -->
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
    };
  },
  mounted() {
    this.$store.dispatch("getZones");
  },
  computed:{
    zones() {
      return this.$store.state.allZone.Zones || [];
    }
  },
  methods: {
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

