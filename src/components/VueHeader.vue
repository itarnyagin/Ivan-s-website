<template>
  <header>
    <span class="header-wrapper">
      <h1>Ivan Tarnyagin</h1>
    </span>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><button id="changeMode">Change Mode</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "VueHeader",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";

header {
  background-color: $main_color_dark;
  display: flex;
  justify-content: space-between;
  height: $header_height;
  border-bottom: $border_width solid $font_color;

  .header-wrapper {
    height: $header_height;
    line-height: $header_height;

    h1 {
      font-size: 2em;
      display: inline-block;
      margin-left: $left_margin;
    }
  }
}

ul {
  list-style: none;
  margin-right: $left_margin;
  li {
    display: inline;
    margin-left: 25px;

    button {
      height: 40px;
      padding: 10px;
      background-color: $side_color_dark;
      transition: background-color 0.25s;
    }
    button:hover {
      background-color: $side_color_dark_hover;
    }
  }
}
</style>
