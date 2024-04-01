<template>
    <div class="div">
        <div class="loader"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loader {
  width: 60px;
  height: 60px;
  border: 10px solid #1cd42550;
  border-top-color: #1cd425;
  animation: spin013151 1s linear infinite;
  border-radius: 100%;

}
.div{
    display: flex;
   justify-content: center;
}

@keyframes spin013151 {
  to {
    transform: rotate(360deg);
  }
}
</style>