<template>
    <section class="content">
      <main>
        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>subscription table</h3>
              <router-link :to="{ name: 'addSubscription'}"><button type="button" class="btn btn-primary">Add subscription</button></router-link>
            </div>
            <table v-if="subscriptions.length > 0">
              <thead>
                <tr>
                  <th>name</th>
                  <th>coordinates</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="subscription in subscriptions" :key="subscription.id">
                  <td>
                    <p>{{ subscription.start_zone_id }}</p>
                  </td>
                  <td>
                    <p>{{ subscription.target_zone_id }}</p>
                  </td>
                  <td>
                    <p>{{ subscription.start_time }}</p>
                  </td>
                  <td>
                    <p>{{ subscription.return_time }}</p>
                  </td>
                  <td>
                    <p>{{ subscription.captain_id }}</p>
                  </td>
                  <td>
                    <p>{{ subscription.passengers_number }}</p>
                  </td>
                  <td>
                    <p>{{ subscription.attendance_days }}</p>
                  </td>

                  <td><router-link :to="{ name: 'updateSubscription', params: { id: subscription.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                  <td><button type="button" class="btn btn-danger" @click="deleteSubscription(subscription.id)">Delete</button></td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No subscription available.</p>
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
      this.$store.dispatch("getAllSubscription");
    },
    computed:{
      subscriptions() {
        return this.$store.state.allSubscription.subscriptions || [];
      }
    },
    methods: {
      deleteSubscription(subId) {
      if (confirm('Are you sure you want to delete this zone?')) { // Confirm deletion
        this.$store.dispatch('deleteSubById', subId); // Dispatch action to delete admin
      }
    },
    }
  };
  </script>
  
  <style scoped>
  @import url("../../assets/css/table.css");
  </style>
  
  