<template>
  <footer>
    <div class="wrapper">
      <h2>I am a footer</h2>
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
  height: $footer_height;
  background-color: $main_color;

  .wrapper {
    padding-left: $left_margin;
    padding-top: $top_margin;
  }
}
</style>
