<template>
  <div id="app">
    <component v-bind:is="layoutComponent"><router-view /></component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layoutComponent: null,
      layout: null
    };
  },
  watch: {
    "$route.path"() {
      this.loadLayout();
    },
  },
  created() {
    this.loadLayout();
  },
  methods :{
    loadLayout(){
      if (this.$route.matched.length) {
        const component = this.$route.matched[0].components.default;
        if(this.layout !== component.layout) {
          this.layout = component.layout;
          if (this.layout) {
            this.layoutComponent = require(`./layout/${this.layout}`).default;
          } else {
            // this.layoutComponent = require(`./layout/main`).default;
            console.log(123);
          }
        }
      }
    }
  }
};
</script>

<style>
body {
  background: whitesmoke;
}
</style>
