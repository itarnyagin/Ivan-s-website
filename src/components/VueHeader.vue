<template>
  <header>
    <h1>Ivan Tarnyagin</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
      </ul>
      <button>Change theme</button>
    </nav>
  </header>
  <hr />
</template>

<script>
export default {
  name: "VueHeader",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";
@import "@/style/scss/mixins.scss";

header {
  @include align;
  height: $header_height;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ul {
    display: inline-block;
    margin-top: 10px;
    li {
      display: inline;
      margin-right: 50px;
    }
  }
  button {
    float: right;
    padding: 10px;
    background-color: $side_color_dark;
  }
}
hr {
  @include hr;
}
</style>
