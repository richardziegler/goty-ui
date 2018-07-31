<template>
  <div class="home">
    <nav>
    <nav-bar/>
    </nav>
    <img src="../assets/logo.png">
            <p>This will be the page to cast your votes.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    NavBar
  }
}
</script>

<style>
nav {
    margin: 0 0 0 0;
    font-family: Arial;
    font-size: 100%;
    width: 100%;
    overflow: hidden;
 }
</style>

