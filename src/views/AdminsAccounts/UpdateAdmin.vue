<template>
  <form @submit.prevent="submitForm"> <!-- Prevent the default form submission -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="admin.email">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Name</label> <!-- "name" was lowercase -->
      <input type="text" class="form-control" id="exampleInputPassword1" v-model="admin.name"> <!-- Changed "password" to "text" -->
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="admin.master">
      <label class="form-check-label" for="exampleCheck1">Master</label> <!-- Changed "status" to "Master" -->
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      admin: {
        email: '', // Initialize admin object with empty values
        name: '',
        master: false
      },
      id: null,
      admins: []
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.admins = this.$store.state.admins.allAdmin || []; 
    this.loadAdmin();
  },
  methods: {
    loadAdmin() {
      if (this.admins.length > 0) { 
        this.admin = this.admins.find(admin => admin.id == this.id);

      }
    },
    submitForm() {
      this.$store.dispatch('update', { id: this.id, data: this.admin });
    }
  }
};
</script>
<style scoped>
  form {
    margin: 8rem 20rem;
  }
</style>