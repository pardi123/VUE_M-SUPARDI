<template>
  <button @click="addEvent">Tambah</button>
</template>

<script>
export default {
    name : 'inputFile',
    methods: {
        addEvent(){
            this.$emit("add-event");
        },
       
    },

  
}
</script>

<style scope>

</style>