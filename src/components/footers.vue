<template>

      <footer class="footer">
       &copy {{ getdate() }} Unity Demas
      </footer>
    
    
    </template>
    
    
    <script>
    
    
    export default {
     data(){
        return{
            date : new Date()
    
        }
    },
    methods: {
    getdate(){
        return this.date.getFullYear()
    }
    }
     }
    </script>
    
    <style scoped>
    footer{
        color: lawngreen;
        font-family: 'Marcellus', sans-serif;
    }
    
    
    </style>