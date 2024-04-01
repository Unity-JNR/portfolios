<template>
    <div>
      <!-- <Navigation/> -->
      <h1 id="heading">Contact</h1>
    </div>
   
       
    <div class="section1">
    <h2><i class="fas fa-envelope"></i> Mail</h2>
    <p>Email Address: unitydemas12@email.com</p>
    <h2><i class="fas fa-phone"></i> Phone</h2>
    <p>Phone Number: 0832673554</p>
    <div>
    <a href="https://www.linkedin.com/in/unity-demas-29a896227/" id="icon" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
  <!-- Add your LinkedIn link or information here -->
  <a href="https://github.com/Unity-JNR" target="_blank" id="icon"><i class="fab fa-github"></i>Github</a>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8873330180445!2d18.714167875748043!3d-33.866794373227435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc53e11bdbaf17%3A0x2fdeb6e1ebd4a43b!2sLindenhof%2C%20Northpine%2C%20Cape%20Town%2C%207560!5e0!3m2!1sen!2sza!4v1705046450029!5m2!1sen!2sza" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>


  <div class="section2">
    <h2 class="text-success font-weight-bold">Fill in the form</h2>
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
  #heading {
    color: white;
  }
 
  #heading::first-letter {
    color: lawngreen;
  }
 
  /* Section styling */
  .section1 {
    background-color: rgba(124, 252, 0, 0.5);
      padding: 20px;
      color: white;
      font-weight: 600;
    }


    .section2 {
      background-color: rgb(255, 249, 249,0.5);
      padding: 20px;
    }


    h2 {
      margin-bottom: 10px;
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
    }


    button {
      background-color: lawngreen;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
    }
    div #icon {
    display: block;
    padding: 10px; /* Adjust the padding as needed */
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  div #icon:hover {
    background-color: #333; /* Change the background color on hover as desired */
  }
  iframe{
    margin-top: 1%;
  }
  </style>