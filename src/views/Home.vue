<template>
  <div class="home">
    <nav>
    <nav-bar/>
    </nav>
    <img src="../assets/logo.png">
            <p>Imma throw some text here just for the fuck of it.</p>
    <HelloWorld msg="Welcome to Game of the Year"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
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

