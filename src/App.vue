<template>
  <div id="app">
    <DefaultLayout />
  </div>
</template>

<script>
  import DefaultLayout from './layouts/DefaultLayout.vue'

  export default {
    name: 'App',
    components: {
      DefaultLayout
    }
  }
</script>

<style>
  /* Import CSS files */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
  @import './assets/css/style.css';
</style>