<template>
  <div class="home">
    <nav>
    <nav-bar/>
    </nav>
    <!-- <sidebar/> -->
    <img src="../assets/psControllerColored.png">
            <p>Welcome to the best app you've ever seen.</p>
          <div id="game-info">
            <h3>Here are some games from the DB.</h3>
           <ul id="example-1">
             <li v-for="item in info" :key="item.id" id="no-decor"><br>
               Title:
              {{ item.title }}<br>
              Developer:
              {{item.developer}}<br>
              Platforms:
              {{item.platforms}}<br>
              Release Date:
              {{item.releaseDate}}
              </li>
            </ul>

          </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import axios from 'axios';


export default {
  data () {
    return {
      info: []
    }
  },
  name: 'home',
  components: {
    NavBar,
    Sidebar
  },
    mounted () {
    axios
      .get('http://localhost:8090/api/v1/games')
      .then(response => {
        this.info = response.data
        console.log(this.info)
      })
  }
}
</script>

<style scoped>
nav {
    margin: 0 0 0 0;
    font-family: Arial;
    font-size: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0%;
 }

#game-info {
   border: 4px solid;
   border-color: darkcyan;
    width: 50vw;
    height: 30vw;
    justify-content: center;
    margin: auto;

 }

#example-1 {
   list-style-type: none;
   position: relative;
    justify-content: center;
    padding: 0 !important;
 }
</style>

