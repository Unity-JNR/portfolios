<template>

     <header>
        <h1>Resume</h1>
      </header>

<div  v-if="$store.state.education !== '' && $store.state.job !== '' && $store.state.skills.length > 0 && $store.state.studies !== ''"> 
    <div class="container pt-4 ">
        <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img :src="$store.state.education.url">
                        <h3>Education</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <ul>
                            <li>
                                <p> {{ $store.state.education.school }}</p>
                            </li>
                            <li>
                                <p> {{ $store.state.education.year }}</p>
                            </li>
                            <li>
                                <p>major subject: {{ $store.state.education.sub }}</p>
                            </li>
                            <li>
                                <p>Degree: {{ $store.state.education.degree }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img :src="$store.state.studies.url">
                        <h3>Education</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <ul>
                            <li>
                                <p> {{ $store.state.studies.school }}</p>
                            </li>
                            <li>
                                <p> {{ $store.state.studies.year }}</p>
                            </li>
                            <li>
                                <p> {{ $store.state.studies.sub }}</p>
                            </li>
                            <li>
                                <p> Degree: {{ $store.state.studies.degree }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img :src="$store.state.job.url">
                        <h3>Job</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <ul>
                            <li>
                                <p>    {{ $store.state.job.work }}</p>
                            </li>
                            <li>
                                <p>       {{ $store.state.job.at }}</p>
                            </li>
                            <li>
                                <p>      {{ $store.state.job.time }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
         <!-- <hr> -->
    <header class="mt-4 skills">
        <h1>Skills</h1>
      </header>

    <div v-for="skill in $store.state.skills" :key="skill.level" id="placement">
 <div>
     <img :src="skill.img" alt="" id="skillimage">
     <p id="skilltext">{{skill.level}}</p>
 </div>
    </div>
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
    fetcheducation() {
      // Call the fetchData action using dispatch
      this.$store.dispatch('fetcheducation');
    },
    fetchJob(){
       this.$store.dispatch('fetchJob');
    },
    fetchSkills(){
      this.$store.dispatch('fetchSkills');
    },
    fetchStudies(){
        this.$store.dispatch('fetchStudies');
    }
  },

  mounted(){
    this.fetcheducation
    this.fetchJob
    this.fetchSkills
    this.fetchStudies
  }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

/* .resume{
    background-image: url('https://cdn-images.imagevenue.com/19/65/a5/ME17X4MH_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
} */
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
hr {
  border: 0;
  height: 1.5px;
  background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255));
}
.skills{
    margin-bottom: 50px;
}
.container{
    width: auto;
    position: relative;
    display: flex;
    justify-content: center;
}

.container .card{
    position: relative;
    cursor: pointer;
}

.container .card .face{
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.container .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.container .card:hover .face.face1{
    background: #000;
    transform: translateY(0);
}

.container .card .face.face1 .content{
    opacity: 0.2;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content{
    opacity: 1;
}

.container .card .face.face1 .content img{
    max-width: 100px;
}

.container .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #D9D9D9;
    text-align: center;
    font-size: 1.5em;
    font-family: 'Marcellus', sans-serif;
}
.container .card .face.face1 .content h3::first-letter{
    color: lawngreen;
}

.container .card .face.face2{
    position: relative;
    background: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.container .card:hover .face.face2{
    transform: translateY(0);
}

.container .card .face.face2 .content p{
    margin: 0;
    padding: 0;
    font-family: 'Marcellus', sans-serif;
}

.container .card .face.face2 .content a{
    margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
}

.container .card .face.face2 .content a:hover{
    background: #333;
    color: #D9D9D9;
}

#skillimage{
    width: 300px;
    height: 250px;
    background-color: #D9D9D9;

  }
  #placement{
    display: inline-block;
    padding: 20px;
    /* margin-bottom: 20px; */
    
  }
  #skilltext{
    color: #D9D9D9;
    font-weight: 800;
    font-size: medium;
    font-family: 'Marcellus', sans-serif;
    margin-top: 5px ;
  }


  @media (max-width: 768px) {
    .container {
        width: 100px;
        align-items: center;
        display: flex;
        justify-content: center;
        /* padding-top: 2px ; */
    }

    .container .card {
        width: 100%;
    }
}

@media (max-width: 576px) {
    .container .card {
        margin-bottom: 10px;
    }
}

@media (max-width: 992px) {
    .container {
        width: 100px;
        align-items: center;
        display: flex;
        justify-content: center;
        /* padding-top: 2px ; */
        /* margin-bottom: 20px; */
    }

    .container .card {
        width: 100%;
        margin-bottom: 20px;
    }
}

@media (width: 325px) {
  
    .container {
        width: 150px;
        align-items: center;
        display: flex;
        justify-content: center;
        /* padding-top: 2px ; */
        /* margin-bottom: 20px; */
        /* overflow: hidden; */
    }

    .container .card {
        width: 150px;
        margin-bottom: 20px;
    }
    .container .card .face{
        width: 150px;
    }
    .container .card .face.face1{
        width: 150px;
    }
    .container .card .face.face2{
        width: 150px;
    }

  
#skillimage{
    width: 100px;
    height: 100px;
}


}

@media (max-width: 324px) {
  
  .container {
      width: 250px;
      align-items: center;
      display: flex;
      justify-content: center;
      /* padding-top: 2px ; */
      /* margin-bottom: 20px; */
      /* overflow: hidden; */
  }

  .container .card {
      width: 250px;
      margin-bottom: 20px;
  }
  .container .card .face{
      width: 250px;
  }

#skillimage{
  width: 100px;
  height: 100px;
}
#placement{
    /* margin-top: 5px; */
   padding: 5px;
}
.skills{
    margin-bottom: 50px;
}

}

</style>