<template>
  <div id="app">
    <div v-if="this.$route.name!='Landing'">
      <div v-if="!isLogged">
        <Navigation/>
      </div>
      <div v-if="isLogged">
        <NavigationLog/>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import NavigationLog from "./components/NavigationLog"
import Navigation from  "./components/Navigation"
export default {
  components:{Navigation,NavigationLog},
  computed:{
    isLogged(){
      let status = this.$store.state.logged;
      return status
    }
  }

}
</script>
<style>
 body{
   background-color:rgb(238, 245, 255);
 }
 body{
   background: url('./assets/spa.jpg') no-repeat center center fixed; 
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
