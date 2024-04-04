<template>
  <div class="about">
    <div class="box">
      <header>
        <h1>About Me</h1>
      </header>
      <div v-if="$store.state.about && typeof $store.state.about === 'string' && $store.state.about.trim() !== ''">
        <main>
          <section class="about-section">
            <h2>Who am I?</h2>
            <div class="bg">
              <img :src="$store.state.aboutimage" alt="" class=" img-fluid">
              <p class="lead p">{{ $store.state.about }}</p>
            </div>
          </section>
          <section class="about-section">
            <hr>
            <h2 class=" pt-4">More About Me: </h2>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 ">
                  <h3 id="heading">Hobbies:</h3>
                  <ul class="list-group mt-3 mb-3">
                    <li class="list-group-item">Play games</li>
                    <li class="list-group-item">Watching Anime</li>
                    <li class="list-group-item">Spending time with family and friends</li>
                    <li class="list-group-item">Coding</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <h3 id="heading">Languages:</h3>
                  <ul class="list-group mt-3 mb-3">
                    <li class= "list-group-item">English</li>
                    <li class="list-group-item">Afrikaans</li>
                    <li class="list-group-item"></li>
                    <li class="list-group-item"></li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <h3 id="heading">Details:</h3>
                  <ul class="list-group mt-3">
                    <li class= "list-group-item" ><p >DOB:{{$store.state.dob}}</p></li>
                    <li class= "list-group-item" ><p >Location: Northpine </p></li>
                    <li class= "list-group-item" ><p >Contact:+27 83 267 3554 </p></li>
                    <li class= "list-group-item" ></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div v-else>
        <spinner/>
      </div>
    </div>
  </div>
  <button @click="openGoogleDocs()" class="btn">Open CV</button>
</template>

<script>
import spinner from '@/components/spinner.vue'

export default {
  components:{
    spinner
  },

  
  methods: {
    openGoogleDocs() {
        window.open('https://docs.google.com/document/d/15DJ_P7XHRPpOQ0Fj4B-GjTtFlizEvGw0XUr5SGd1RGA/edit?usp=sharing', '_blank');
    }
  },
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
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

.about {
    font-family: 'Marcellus', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #D9D9D9;;
    color: #000;
    text-align: center;
    padding: 20px 0;
  
}

header h1 {
    margin: 0;
    font-weight: bolder !important;
    font-family: 'Marcellus', sans-serif;
}
h2{
  color: #D9D9D9 !important;
  font-family: 'Marcellus', sans-serif;
}
h2::first-letter{
  color: lawngreen !important;
}

.p{
  color: #D9D9D9;
  font-family: 'Marcellus', sans-serif;
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
    font-family: 'Marcellus', sans-serif;
}

hr {
  border: 0;
  height: 1.5px;
  background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255));
}
.bg {
  background-color: rgb(10, 10, 10,0.8);
  border-radius: 25px;
  padding: 10px;
  box-shadow: 0 0 20px lawngreen; /* Horizontal offset, vertical offset, blur radius, color */
}
.list-group-item{
  height: 50px;
  background-color: #D9D9D9;
  font-family: 'Marcellus', sans-serif;
}

h3{
  color: lawngreen;
  font-family: 'Marcellus', sans-serif;
}

.list-group{
  border-radius: 20px;
  box-shadow: 0 0 10px lawngreen; /* Horizontal offset, vertical offset, blur radius, color */
}
.btn {
 width: 9em;
 height: 3em;
 color: white;
 font-weight: bold;
 border-radius: 30em;
 font-size: 15px;
 font-family: 'Marcellus', sans-serif;
 position: relative;
 overflow: hidden;
 z-index: 1;
 border: 1px solid rgb(15, 233, 26);
}
.btn::before {
 content: '';
 width: 0;
 height: 3em;
 border-radius: 30em;
 position: absolute;
 color: #d9d9d9;
 top: 0;
 left: 0;
 background-image: linear-gradient(to right, #25e807 10%, #2cf52c 100%);
 transition: .5s ease;
 display: block;
 z-index: -1;
}
.btn:hover::before {
 width: 9em;
}

/* Media Queries */
@media screen and (max-width: 300px) {
  /* Adjust styles for small devices (less than 300px wide) */
  header {
    padding: 10px 0;
  }
  p{
    text-wrap:wrap;
  }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
  /* Adjust styles for devices between 301px and 720px wide */
  main {
    padding: 10px;
  }
  p{
    text-wrap:wrap;
  }
}

@media screen and (min-width: 721px) {
  /* Adjust styles for larger devices (greater than 720px wide) */
  .about-section {
    max-width: 1000px;
  }
  p{
    text-wrap:wrap;
  }
}
</style>
