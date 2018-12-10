<template>
  <div>
         <router-link to="/">home</router-link>
    <router-link to="/myaccount">myaccount</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import TheTopNavigatorBar from "Cmn/TheTopNavigatorBar";
//import from ;
//import from ;
export default {
  name: "LTheTemplate",
  components: {
    LTheTopNavigatorBar: TheTopNavigatorBar
  }
};
</script>

<style>
</style>


