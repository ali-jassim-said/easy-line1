<template>
  <section class="content">
    <main>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Admins table</h3>
            <button type="button" class="btn btn-primary" @click="toggleDialog()">Add admin</button>
          </div>
          <table v-if="admins.length > 0">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in admins" :key="admin.id">
                <td><img :src="admin.avatar" alt="">
                  <p>{{ admin.name }}</p>
                </td>
                <td>{{ admin.email }}</td>
                <td><span class="Status pending">{{ admin.master }}</span></td>
                <td><router-link :to="{ name: 'update', params: {id: admin.id}}"><button type="button" class="btn btn-primary">update</button></router-link></td>
                <td><button type="button" class="btn btn-danger" @click="deleteAdmin(admin.id)">Delete</button></td> 
                <td><router-link :to="{ name: 'getAdmin', params: {id: admin.id}}"><button type="button" class="btn btn-info">Info</button></router-link></td>
              </tr>
              <AddAdmin />
            </tbody>
          </table>
          <div v-else>
            <p>No admins available.</p> <!-- Display a message when no admins are available -->
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import AddAdmin from '@/components/admin/AddAdmin.vue';
export default {
  name: "adminView",
  computed: {
    admins() {
      return this.$store.state.admins.allAdmin || [];
    }
  },
  components: {
    AddAdmin
  },
  methods: {
    toggleDialog(){
      this.$store.state.dialog = !this.$store.state.dialog
    },
    deleteAdmin(adminId) {
      if (confirm('Are you sure you want to delete this admin?')) { // Confirm deletion
        this.$store.dispatch('deleteAdminById', adminId); // Dispatch action to delete admin
      }
    },
  },
  mounted() {
    this.$store.dispatch('admins')
}
}
</script>

<style scoped>
@import url("../../assets/css/table.css");
</style>
