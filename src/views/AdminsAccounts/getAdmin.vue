<template>
  <section class="content">
    <main>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>ZoneInfo</h3>
          </div>
          <table v-if="adminInfo">
            <thead>
              <tr>
                <th>email</th>
                <th>status</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{{ adminInfo.email }}</p>
                </td>
                <td>
                  <p>{{ adminInfo.master }}</p>
                </td>
                <td><router-link :to="{ name: 'update', params: { id: adminInfo.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                <td><button type="button" class="btn btn-danger" @click="deleteAdmin(adminInfo.id)">Delete</button></td>
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
      adminId: null
    };
  },
  mounted() {
    this.adminId = this.$route.params.id; 
    this.getAdminInfo(this.adminId);
  },
  computed:{
    adminInfo() {
      return this.$store.state.getAdm.admin || null;
    }
  },
  methods: {
    getAdminInfo(adminId) {
       this.$store.dispatch('getAdminInfoById', adminId)
    },
    deleteAdmin(adminId) {
      if (confirm('Are you sure you want to delete this zone?')) { // Confirm deletion
        this.$store.dispatch('deleteAdminById', adminId); // Dispatch action to delete admin
      }
    },
  }
};
</script>

<style scoped>
@import url("../../assets/css/table.css");
</style>

