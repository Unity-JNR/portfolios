<template>
 
      <h1 id="heading" class="py-4">Projects</h1>
  
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
                       <button class="card__button"><a :href="project.vercel" target="_blank">Vercel</a></button>
                   
                   </div>
                   </div>
   
                 </div>
               </div>
         
           </div> <!--container-->
         </div>

         <div v-else>
          <spinner/>
         </div>

  
      

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
    .card {
  position: relative;
  width: 350px;
  aspect-ratio: 16/9;
  background-color: #f2f2f2;
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
  background-color: #f2f2f2;
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
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 10px;
  font-size: 12px;
  color: #777;
  line-height: 1.4;
}

.card__button {
  padding: 15px;
  border-radius: 8px;
  background: #777;
  border: none;
  color: white;
}

.secondary {
  background: transparent;
  color: #777;
  border: 1px solid #777;
}

   </style>