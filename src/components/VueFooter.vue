<template>
  <footer>
    <h2>Contact me:</h2>
  </footer>
</template>

<script>
export default {
  name: "VueFooter",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";

footer {
  position: absolute;
  bottom: 0;
  height: $footer_height;
  width: 100vw - $left_margin;
  padding-left: $left_margin;
  padding-right: auto;
  border-top: $border_width solid $font_color;

  background-color: $main_color_dark;
}
</style>
