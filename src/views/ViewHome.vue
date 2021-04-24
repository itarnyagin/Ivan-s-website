<template>
  <div class="home">
    <vue-header></vue-header>
    <content-home></content-home>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueHeader from "../components/VueHeader";
import ContentHome from "../components/ContentHome";
import VueFooter from "../components/VueFooter";

export default {
  name: "ViewHome",
  components: {
    VueHeader,
    ContentHome,
    VueFooter,
  },
};
</script>

<style scoped></style>
