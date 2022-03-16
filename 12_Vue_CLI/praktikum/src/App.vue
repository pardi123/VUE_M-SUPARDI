<template>
  <div id="app">
    <div>
      <ol>
       

        <li v-for="subject in subjects" :key="subject.message">
          {{ subject.message }}
        </li>     
      
      </ol>
    </div>
    <input type="text" v-model="isi" value="isi">
    <button @click="addSubject">Tambahkan</button>
    <div v-if="subjects.length > 3">
      Hebat
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isi:'',
      subjects: [],
    }
  },
  methods: {
    addSubject(){
    
      if(this.isi === '')
      {
        this.isi = ''
      }
      else{
       this.subjects.push({message:this.isi})
        this.isi = ""
      }
     
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
