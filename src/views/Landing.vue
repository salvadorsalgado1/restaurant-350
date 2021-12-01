<template>
   <div class="landing">
    <div class="background-video"> 
      <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
        <source src="../assets/landing-rest.mp4" type="video/mp4">
      </video>
      <div class="head-vid">
          <h1 class="mr-3 header-vid">Restaurant</h1>
          <p class="desc-vid">Lets Get Started</p> 
            <router-link class="btn btn-primary btn-controls btn-controls-1" :to="{name:'Signin'}">Sign In</router-link>
            <router-link class="btn btn-primary btn-controls" :to="{name:'Registration'}">Register</router-link>
       </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Landing'
}
</script>

<style>
.btn-controls{margin:5px;}
.desc-vid{
    font-size:1.8em;
}
.header-vid{
font-size:3em;
}
 .head-vid{
     margin-right:5%;
 }
 .background-video  {
    color:white;
    display:flex;
    align-items: center;
    justify-content: flex-end;
     
    background-color:rgba(32, 32, 32, 0.568);
    height:100vh;
    width:100vw;
    object-fit: cover;
    top:0;
    left:0;
    z-index:1;
 }
/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
  
  .landing{
    background:url("../assets/mobile-map.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
}
video{
  z-index: -1;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
 