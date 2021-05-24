<template>
  <vue-header></vue-header>
  <vue-footer></vue-footer>
</template>

<script>
import VueFooter from "../components/VueFooter.vue";
import VueHeader from "../components/VueHeader.vue";

export default {
  name: "ViewProjects",
  components: {
    VueHeader,
    VueFooter,
  },
};
</script>
