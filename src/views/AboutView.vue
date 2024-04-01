<template>
  <div class="about">
    <div class="box">
      <header>
        <h1>About Me</h1>
      </header>
      <div v-if="$store.state.about && typeof $store.state.about === 'string' && $store.state.about.trim() !== ''">
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
                    <li class="list-group-item">English</li>
                    <li class="list-group-item">Afrikaans</li>
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
</template>

<script>
import spinner from '@/components/spinner.vue'

export default {
  components:{
    spinner
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
