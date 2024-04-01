<template>
<div  v-if="$store.state.education !== '' && $store.state.job !== '' && $store.state.skills.length > 0"> 
    <div class="container pt-4 ">
        <div class="row">
        <div class="col-lg-6">
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
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

    <div v-for="skill in $store.state.skills" :key="skill.level" id="placement">
 <div>
     <p id="skilltext">{{skill.level}}</p>
   <img :src="skill.img" alt="" id="skillimage">
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
    }
  },

  mounted(){
    this.fetcheducation
    this.fetchJob
    this.fetchSkills
  }
    }
</script>

<style scoped>
/* .resume{
    background-image: url('https://cdn-images.imagevenue.com/19/65/a5/ME17X4MH_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
} */
.container{
    width: 1000px;
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
    background: #28ec0a;
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
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.container .card .face.face2{
    position: relative;
    background: #fff;
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
    color: #fff;
}

#skillimage{
    width: 250px;
    height: 250px;
    background-color: white;

  }
  #placement{
    display: inline-block;
    padding: 20px;
    /* margin-bottom: 20px; */
    
  }
  #skilltext{
    color: white;
    font-weight: 800;
    font-size: medium;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
</style>