<template>
<div id="thisAbout">
    
<button class="btn m-5"><router-link to="/" class="text-white"> Kembali</router-link></button> 

   <div class="card">
        <div class="card-header">
            <h4>{{ getTodos[idTodos].text }}</h4>        
        </div>
        <div class="card-body">
            <p> {{ getTodos[idTodos].deskripsi }}</p>
        </div>
        <div class="card-footer">
            <input type="text" v-model="newValueDeskripsi" class="test" v-on:keyup.enter="editDeskripsi(idTodos,getTodos[idTodos].text)
                "> <button class="btn" @click="editDeskripsi(idTodos,getTodos[idTodos].text)">Edit</button>
        </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'thisAbout',
    data() {
        return {
            newValueDeskripsi: '' ,

            valueTodos: {},
        }
    },
    computed:{
        getTodos(){
            return this.$store.state.todos
        },
        idTodos(){
            return this.$route.params.id
        }
    },
    methods: {
        editDeskripsi(id,text){
          if(this.newValueDeskripsi != '')
          {
                this.valueTodos = {
                idTodos:id,
                newDeskripsi:this.newValueDeskripsi,
                textTodos:text,
            }
            this.$store.dispatch("editDeksripsi",this.valueTodos)
            this.newValueDeskripsi = ''
          }
        }
    },
  
}
</script>

<style>
     #thisAbout{
        box-sizing: border-box;
        width:100%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 20px;
    }
    .m-5{
        margin-bottom:20px;

    }
    .text-white{
        color:white !important; 
        font-weight:bold !important;
    }
</style>