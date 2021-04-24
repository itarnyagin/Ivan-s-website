<template>
  <main>
    <div class="wrapper">
      <h1>Hi, I'm Ivan</h1>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentAbout",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";

main {
  display: flex;
  height: 100%;
  background-color: $main_color_light;
  .wrapper {
    margin-left: $left_margin;
  }
}
</style>
