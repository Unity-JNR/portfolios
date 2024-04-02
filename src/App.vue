<template>
  <Navigation/>
  <router-view/>
  <footers/>
  
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import footers from '@/components/footers.vue'

export default {
  components:{
    Navigation,
    footers
   
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url('https://cdn-images.imagevenue.com/a8/30/fd/ME17YN2B_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175)); */
  background-color: black;
}

nav {
  padding: 30px;
  text-align: center;
  background-color: rgb(6, 5, 5,0.7);
}

nav a {
  font-weight: bold;
  color: white;
  padding: 5px;
}

nav a.router-link-exact-active {
  color: lawngreen;
}



</style>
