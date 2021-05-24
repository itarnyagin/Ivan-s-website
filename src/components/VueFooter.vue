<template>
  <hr />
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
@import "@/style/scss/mixins.scss";

hr {
  @include hr;
}
footer {
  @include align;
}
</style>
