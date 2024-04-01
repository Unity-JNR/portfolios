<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">resume</router-link> |
    <router-link to="/projects">projects</router-link> |
    <router-link to="/testimonials">testimonials</router-link> |
    <router-link to="/contact">contact</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('https://cdn-images.imagevenue.com/19/65/a5/ME17X4MH_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
