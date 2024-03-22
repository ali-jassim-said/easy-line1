<template>
  <v-row justify="center">
    <v-dialog
    v-model="dialogVisible"
      persistent
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">New admin</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="name"
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12"
                sm="6"
                md="4">
                <v-text-field
                  label="Email"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="master"
                  v-model="master"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="addAdmin"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import useValidate from '@vuelidate/core';
import { required} from '@vuelidate/validators'
export default {
  data(){
    console.log(this.name)
    return{
      v$: useValidate(),
      email: null,
      master: true,
      name: null,
    }
  },
  validations(){
    return{
    email: { required},
    master: {required},
    name: { required}
    }
  },
  methods:{
    addAdmin(){
      this.v$.$validate()
      if(!this.v$.$error){
        const form = {
          email: this.email,
          master: this.master,
          name: this.name
        };
        this.$store.dispatch('add', form)
      }
      this.$store.state.dialog = false
    },
    closeDialog(){
      return  this.$store.state.dialog = false
    }
  },
  computed: {
    dialogVisible(){
      return this.$store.state.dialog
    },
  }

};
</script>
