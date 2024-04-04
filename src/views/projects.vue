<template>
  <body>
    
 
 
    <header>
        <h1>Projects</h1>
      </header>
  
         <div v-if="$store.state.project.length > 0" >
           <div class="container">
             <div class="row">
               <div v-for="project in $store.state.project" :key="project.title" class="col-lg-4 pb-4 d-flex justify-content-center">
                   <div class="card">
                   <img class="image card__image" :src="project.url">
                   <div class="card__content">
                       <p class="card__title">{{ project.title }}</p>
                       <p class="card__description">{{ project.decription }}</p>
                       <button class="card__button"><a :href="project.github" target="_blank">GitHub</a></button>
                       <button class="card__button"><li class="fa fa-link"></li> <a :href="project.vercel" target="_blank">Live Link</a></button>
                   
                   </div>
                   </div>
   
                 </div>
               </div>
         
           </div> <!--container-->
         </div>

         <div v-else>
          <spinner/>
         </div>

  
      
        </body>
  </template>
  
   
   <script>
import spinner from '@/components/spinner.vue'
    export default {
        components: {
            spinner
        },
     
       computed: {
          fetchProject() {
               // Call the fetchData action using dispatch
               this.$store.dispatch('fetchProject');
           },
       },
   
       mounted() {
           this.fetchProject; // Add parentheses to invoke the method
       }
    
   }

   </script>
   
   <style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

   body{
     min-height: 89.9vh; 
     background-color: black;
     font-family: 'Marcellus', sans-serif;
   }
   header {
    background-color: #D9D9D9;
    color: #000;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 65px;
  
}

header h1 {
    margin: 0;
    font-weight: bolder !important;
    font-family: 'Marcellus', sans-serif;
}
    .card {
  position: relative;
  width: 350px;
  aspect-ratio: 16/9;
  background-color: #D9D9D9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card .image {
  width: 250px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  object-fit: fill;
}

.card__image {
  width: 100%;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #D9D9D9;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  font-family: 'Marcellus', sans-serif;
}

.card__title::first-letter{
  color: lawngreen;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 10px;
  font-size: 15px;
  color: black;
  line-height: 1.4;
  font-family: 'Marcellus', sans-serif;
}

.card__button {
  padding: 15px;
  border-radius: 8px;
  background: #000;
  border: none;
  color: #D9D9D9;
  margin: 2px;
}

.secondary {
  background: transparent;
  color: #777;
  border: 1px solid #777;
}

a{
  color: #D9D9D9;
  text-decoration: none;
  font-family: 'Marcellus', sans-serif;


}
   </style>