<template>
  <footer>
    <div class="wrapper">
      <h2>Contact me:</h2>
      <address>
        <p>
          Email:
          <a href="mailto:ivan.tarnyagin@gmail.com">ivan.tarnyagin@gmail.com</a>
        </p>
        <p>Phone Number: +47 48157049</p>
      </address>
    </div>
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
  position: fixed;
  bottom: 0;
  height: $footer_height;
  width: 100vw;
  background-color: $main_color_dark;
  border-top: $border_width solid $font_color;

  .wrapper {
    padding-left: $left_margin;
    padding-top: $top_margin;
  }
}
</style>
