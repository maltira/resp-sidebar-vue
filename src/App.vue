<script setup>
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div>
    <Sidebar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
