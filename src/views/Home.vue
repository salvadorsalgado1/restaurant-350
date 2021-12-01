<template>
   <div class="home container">
      <div class="row mt-5">
         <div class="col-md-12 col-lg-6 mb-4">
            <img class="img-hero-home" src="../assets/mobile-map.jpg" alt=""/>
         </div>
         <div class="col-md-12 col-lg-6">
            <div class="about">
               <h1 class="display-4">What We're About</h1>
               <div class="lead hero-text">
                  <p class="">We strive for excellence. For us, sustainability is not a lofty idea but a fundamental, 
                  and necessary, endeavor. Our concept is about the food and drink of course, but it’s also about 
                  our team, our facilities, our practices, and the hundreds of decisions we make each day that affect 
                  the world around us.</p>
                  <p>We believe it’s about finding a balance, which allows us to sustain our quest of making quality, 
                  accessible food, while also giving back to our community and the environment.</p>
                </div>
            </div>
         </div>
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
  export default {
  name: 'Home',
}
</script>
<style>
.hero-text{padding:20px;}
.about{color:white; background-color:rgba(22, 22, 22, 0.63);border-radius:15px 15px 15px}
.img-hero-home{width:80%;}
</style>
 