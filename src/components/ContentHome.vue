<template>
  <main>
    <h2>About me:</h2>
  </main>
</template>

<script>
export default {
  name: "ContentHome",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";
main {
  display: felx;
  padding-left: $left_margin;
  background-color: $main_color_dark;
  height: $content_height;
}
</style>
