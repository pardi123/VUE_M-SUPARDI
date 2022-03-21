<template>
  <div id="app">
  <h1>Todo List</h1>
    <div v-for="(event,index) in events" :key="event.nama" class="list">
      <div class="list-event">
        {{ index+1 }}. {{ event.nama }}   

      </div>    
        <button @click="deleteEvent(index)">Hapus</button>
        <button @click="changeForm(index)">Edit</button>


    </div>
    <div class="inputEvent">
    <div v-if="form === false">
    <input type="text" v-model="isi">

    <inputEvent @add-event="addValueEvent" />
    
    </div>
    <div v-else>
      <input type="text" v-model="afterIsi">
      <button @click="editValue(selectionEvent)">edit </button>
    </div>
    
   
    
  </div>

  </div>
</template>

<script>
import inputEvent from '@/components/inputEvent.vue'
export default {
  name: 'App',
  components : {
    inputEvent,
  },
  data() {
    return {
      isi: '',
      events:[],
      form:false,
      afterIsi:'',
    }
  },
  methods: {
    addValueEvent(){
      if(this.isi === ''){
        this.isi= '';
      }
      else{
        this.events.push({nama:this.isi})
        this.isi=""
      }
    },
    deleteEvent(id){
        this.events.splice(id,1);
    },
    changeForm(event){
      this.form = true;
      this.selectionEvent = event;
    },
    editValue(id) {
     this.form = false
     this.events.splice(id,1,{nama:this.afterIsi})
     this.afterIsi = "";
     
    }
  },

 
}
</script>

<style>
body{
    top:0;
}
input {
    width:80%;
}
button{
    margin-left: 90px;
}
.list{
    padding: 10px;
    margin: 10px;
    width: 100%;
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.list-event{
    width: 70%;
}
</style>
