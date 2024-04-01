<template>
  <div class="about">

    <div class="box">
      <header>
        <h1>About Me</h1>
    </header>
    <main>
        <section class="about-section">
            <h2>Who am I</h2>
            <p class="lead text-dark">{{ $store.state.about }}</p>
        </section>
        <section class="about-section">
          <hr>
          <h3 id="heading">Details:</h3>
                 <p class="lead">DOB:{{$store.state.dob}}</p>
                 <hr>
          <h2>more about me: </h2>
          <div class="container">
             <div class="row">
              <div class="col-lg-6">
                <ul class="list-group">
                 <h3 id="heading">Hobbies:</h3>
                 <li class="list-group-item">Play games</li>
                 <li class="list-group-item">Watching Anime</li>
                 <li class="list-group-item">Spending time with family and friends</li>
                 <li class="list-group-item">Coding</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="list-group">
                 <h3 id="heading">languages:</h3>
                 <li class="list-group-item ">English</li>
                 <li class="list-group-item ">Afrikaans</li>
              
                </ul>
              </div>
             </div>
          </div>
        </section>
    </main>
        
     
    </div>
   
  </div>
</template>


<script>


export default {


  computed: {
    fetchData() {
      this.$store.dispatch('fetchData');
    },
    fetchAbout() {
      this.$store.dispatch('fetchAbout');
    },
    fetchDOB(){
      this.$store.dispatch('fetchDOB');
    },
    fetchpassions(){
      this.$store.dispatch('fetchpassions');
    }
  },

  mounted() {
    this.fetchData;
    this.fetchAbout;
    this.fetchDOB;
    this.fetchpassions;
  },
};
</script>

<style scoped>
/* .about{
  background-image: url('https://cdn-images.imagevenue.com/19/65/a5/ME17X4MH_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
} */

.about {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

header h1 {
    margin: 0;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.about-section {
    max-width: 800px;
    margin-bottom: 40px;
}

.about-section h2 {
    color: #333;
    margin-top: 0;
}


hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  
 }
/* Additional styling can be added here */



</style>