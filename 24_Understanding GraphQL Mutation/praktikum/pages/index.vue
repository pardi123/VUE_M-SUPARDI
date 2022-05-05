<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
        <v-card
          class="mx-auto py-4"
          outlined
        >
        <v-container>
          
            <v-card-title class="py-4">Query</v-card-title>
            <v-divider></v-divider>
            
              <v-row justify="end">
                <v-col cols="4" class="mx-3">
                    <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="600px"
                    >
                    <template v-slot:activator="{on,attrs}">
                        <v-btn
                          color="green"
                          v-bind="attrs"
                          v-on="on"
                        >
                          Tambah User
                        </v-btn>
                    </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Tambah User</span>
                          </v-card-title>
                          <v-card-text>
                              <v-container>
                                  <v-row>
                                    <v-col cols="12">
                                      <v-form
                                        ref="form"
                                        v-model="valid"
                                        lazy-validation
                                      > 

                                          <v-text-field
                                            label="Nama Lengkap"
                                            v-model="nama"
                                            :rules="namaRules"
                                            required
                                          >
                                            
                                          </v-text-field>
                                          <v-btn color="green" @click="validate"
                                            :disabled="!valid"
                                          >
                                            Submit
                                          </v-btn>
                                            <v-btn color="red" dark danse @click="closeDialog">
                                            Close
                                          </v-btn>
                                      </v-form>
                                        </v-col>

                                  </v-row>
                              </v-container>
                          </v-card-text>
                        </v-card>
                    </v-dialog>
                     <v-dialog
                      v-model="dialogEdit"
                      persistent
                      max-width="600px"
                    >
               
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Edit User</span>
                          </v-card-title>
                          <v-card-text>
                              <v-container>
                                  <v-row>
                                    <v-col cols="12">
                                      <v-form
                                        ref="form"
                                        lazy-validation
                                      > 

                                          <v-text-field
                                            label="Nama Lengkap"
                                            v-model="nama"
                                            :rules="namaRules"
                                            required
                                          >
                                            
                                          </v-text-field>
                                          <v-btn color="green" @click="editUser"
                                            :disabled="!valid"
                                          >
                                            Submit
                                          </v-btn>
                                            <v-btn color="red" dark danse @click="closeDialogEdit">
                                            Close
                                          </v-btn>
                                      </v-form>
                                        </v-col>

                                  </v-row>
                              </v-container>
                          </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-col>

                <v-col cols="4">
                    <v-text-field label="Masukan Id"
                      v-model.Number="id"
                      type="number"
                      v-on:keyup="getUser()"
                    >

                    </v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                              <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody >
                                <tr
                                v-for="(user,i) in users" 
                                :key="i"
                                >
                                    <td>{{ user.id }}</td>
                                    <td>{{user.nama}}</td>
                                    <td>
                                           <v-btn
                          color="green"
                          @click="setName(user.nama,user.id,i)"
                          class="mx-3"
                        >
                          Edit
                        </v-btn>
                                    </td>
                                    <td>

 
                                      <v-btn color="red" @click="deleteUser(i,user.id)">
                                          delete
                                      </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
              </v-row>
        </v-container>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
import mutationsUser from '~/graphql/mutation/user'
export default {
  name: 'IndexPage',
  data: () =>({
      valid: true,
      users: [],
      id:0,
      dialog: false,
      dialogEdit:false,
      nama: '',
      index: 0,
      namaRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',

      ],

  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser(){
     if(this.id >= 1) {
       this.$apollo
          .query({
              query: require('~/graphql/query/userId.gql').search,
              variables: {
                id: this.id
              }
          }) .then(response =>{
              this.users = response.data.kampus_merdeka
              console.log(response.data)
          }) .catch(error =>{
              console.log(error)
          })
      }

      else {
        this.$apollo
          .query({
              query: require('~/graphql/query/user.gql').users
          }) .then(response =>{
              this.users = response.data.kampus_merdeka
              console.log(response.data)
          }) .catch(error =>{
              console.log(error)
          })

      }
    },
    editUser(){
     const id = this.index
      this.$apollo.mutate({
        mutation: mutationsUser.updateUser,
        variables: {
          id: this.id,
          nama: this.nama
        }
      }) .then(response => {
        this.dialogEdit = false
        this.users.splice(id,1,response.data.update_kampus_merdeka.returning[0])
      })
    },
    validate () {
          this.$apollo.mutate({
            mutation: mutationsUser.insertUser,
            variables: {
              nama: this.nama
            }
          }) .then(response => {
                this.users.push(response.data.insert_kampus_merdeka.returning[0])
                this.dialog = false
                this.nama = ''
          }) .catch(error => {
              console.log(error)
          })
    },
    addUser(){
        alert(this.nama)
    },
    closeDialog () {
      this.nama = ''
      this.dialog = false
    },
    closeDialogEdit(){
      this.nama = ''
      this.id = 0
      this.dialogEdit = false
      
    },
    deleteUser(id,idUser){
        this.$apollo.mutate({
            mutation: mutationsUser.delteUSer,
            variables: {
              id: idUser
            }
        }) .then(response =>{
          console.log(response.data)
          this.users.splice(id,1)
        }) .catch(error => {
          console.log(error)
        })
    },
    setName(nama,id,i){
        this.nama = nama
        this.dialogEdit = true
        this.id = id
        this.index = i
    }
  }
}
</script>
