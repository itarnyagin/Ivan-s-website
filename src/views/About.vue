<template>
  <vue-header></vue-header>
  <about-content></about-content>
  <vue-footer></vue-footer>
</template>

<script>
import VueHeader from "../components/VueHeader.vue";
import AboutContent from "../components/AboutContent.vue";
import VueFooter from "../components/VueFooter.vue";

export default {
  name: "About",
  components: {
    VueHeader,
    AboutContent,
    VueFooter,
  },
};
</script>
