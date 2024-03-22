<template>
    <section class="content">
      <main>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>ZoneInfo</h3>
            </div>
            <table v-if="subs">
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
                    <p>{{ subs.current_page }}</p>
                  </td>
                  <td><router-link :to="{ name: 'updateSubscription', params: { id: subs.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                  <td><button type="button" class="btn btn-danger" @click="deleteSubscription(subs.id)">Delete</button></td>
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
        subId: null
      };
    },
    mounted() {
        this.subId = this.$route.params.id
        this.getSubsInfo(this.subId);
    },
    computed:{
      subs() {
        return this.$store.state.getSubs.subscription || {};
      }
    },
    methods: {
        getSubsInfo(subId) {
       this.$store.dispatch('getSubInfoById', subId)
    },
    deleteSubscription(subId) {
        if (confirm('Are you sure you want to delete this zone?')) { // Confirm deletion
          this.$store.dispatch('deleteZoneById', subId); // Dispatch action to delete admin
        }
      },
    }
  };
  </script>
  
  <style scoped>
  @import url("../../assets/css/table.css");
  </style>
  
  