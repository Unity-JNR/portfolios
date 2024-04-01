
<template>
<div class="sticky-top">

    <nav class="navbar navbar-expand-lg  bg-body-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <router-link :to="{name: 'home'}">Home</router-link> 
             <router-link :to="{name: 'about'}">About</router-link> 
              <router-link :to="{name: 'resume'}">Resume/Skills</router-link> 
            <router-link :to="{name: 'projects'}">Projects</router-link> 
           <router-link :to="{name: 'testimonials'}">Testimonial</router-link> 
          <router-link :to="{name: 'contact'}">Contact</router-link> 
          </div>
        </div>
      </div>
    </nav>
</div>
    
    
      <!-- <router-view/> -->
    
    </template>
    
    <script>
    
    
    export default {
     
    }
    </script>
  