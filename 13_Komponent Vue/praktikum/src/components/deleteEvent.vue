<template>
  <button @click="deleteEvent">Hapus</button>
</template>

<script>
export default {
    name: 'deleteEvent',
    methods: {
        deleteEvent(){
            this.$emit("delete-event")
        }
    },
}
</script>

<style>

</style>