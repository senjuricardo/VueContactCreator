<script >
import {RouterView, RouterLink} from 'vue-router'
</script>

<template>
<!-- <button type="button" class="btn btn-primary"> <RouterLink class="text-light text-decoration-none m-2" :to="{name: 'Main'}">Manage Users</RouterLink> </button> -->

 <router-view></router-view>
 <footer>Ricardo Sousa T0121085</footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
