<template>
   
      <!-- <Navigation/> -->
      <header>
        <h1>Contact</h1>
      </header>
  
   
       
    <div class="section1">
      <div class="icons">
        <i class="fas fa-envelope"></i> <h2> Mail</h2>
      <p>Email Address: unitydemas12@email.com</p>
      <i class="fas fa-phone"></i> <h2> Phone</h2>
      <p>Phone Number: +27 83 267 3554</p>
      </div>
    <div>
    <a href="https://www.linkedin.com/in/unity-demas-29a896227/" id="icon" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
  <!-- Add your LinkedIn link or information here -->
  <a href="https://github.com/Unity-JNR" target="_blank" id="icon"><i class="fab fa-github"></i>Github</a>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.33587586555!2d18.701620755980876!3d-33.8681695216258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc515f839e7423%3A0xf289ddac7d7cc645!2sNorthpine%2C%20Cape%20Town%2C%207560!5e0!3m2!1sen!2sza!4v1712213192702!5m2!1sen!2sza" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div> 


  <div class="section2">
    <h3 class="font-weight-bold">Fill in the form</h3>
    <form @submit.prevent="submitForm" method="post" action="https://formspree.io/f/xqkrapkr">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="formData.name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" v-model="formData.email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" v-model="formData.message" required></textarea>

    <button type="submit">Submit</button>
  </form>
  </div>

  <footers/>

  </template>
 
  <script>
  // @ is an alias to /src
//   import Navigation from '@/components/Navigation.vue'
//   import footers from '@/components/footer.vue'
  import axios from 'axios'
 
  export default {
    // components: {
    //   Navigation,
    //   footers
    // },
    data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        // You can add form validation logic here if needed
        alert('Form has been submitted');


        // If you want to send an AJAX request, you can use libraries like Axios
        // Example using Axios:
        await axios.post('https://formspree.io/f/xqkrapkr', this.formData);

        // Reset the form after submission
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
}
  </script>
 
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

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
 
  /* Section styling */
  .section1 {
    /* background-color: rgba(124, 252, 0, 0.5); */
      padding: 20px;
      color: #D9D9D9;
      font-weight: 600;
      font-family: 'Marcellus', sans-serif;
    }


    .section2 {
      background-color:#D9D9D9;
      padding: 20px;
      font-family: 'Marcellus', sans-serif;

    }


    h2{
      margin-bottom: 10px;
      color: #D9D9D9;
      font-family: 'Marcellus', sans-serif;
    }

   .section1 h2::first-letter{
      color: lawngreen !important;
    }
    h3{
      color: black;
    }


    form {
      max-width: 400px;
      margin: auto;
    }


    label {
      display: block;
      margin-bottom: 8px;
    }


    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      box-sizing: border-box;
      background-color: white;
      font-family: 'Marcellus', sans-serif;
    }


    button {
      background-color: lawngreen;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
      font-family: 'Marcellus', sans-serif;
    }
    div #icon {
    display: block;
    padding: 10px; /* Adjust the padding as needed */
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  div #icon:hover {
    background-color: #D9D9D9; /* Change the background color on hover as desired */
  }
  iframe{
    margin-top: 1%;
  }
 
  </style>