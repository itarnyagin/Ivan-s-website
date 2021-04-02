<template>
  <div class="home">
    <vue-header></vue-header>
    <home-content></home-content>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueHeader from "../components/VueHeader";
import HomeContent from "../components/HomeContent";
import VueFooter from "../components/VueFooter";

export default {
  name: "Home",
  components: {
    VueHeader,
    HomeContent,
    VueFooter,
  },
};
</script>
VueFootert>

<style scoped></style>
