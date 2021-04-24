<template>
  <router-view />
</template>

<style lang="scss">
@import "./style/css/global.css";
@import "@/style/scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $side_color_dark;
    }
  }
}
</style>
