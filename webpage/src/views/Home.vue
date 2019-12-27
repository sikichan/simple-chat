<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from './Login.vue';

export default {
  name: 'home',
  components: {
    Login,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 20px;
}

</style>
