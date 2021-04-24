<template>
  <vue-header></vue-header>
  <vue-project></vue-project>
  <vue-footer></vue-footer>
</template>

<script>
import VueFooter from "../components/VueFooter.vue";
import VueHeader from "../components/VueHeader.vue";
import VueProject from "../components/VueProject.vue";

export default {
  name: "Projects",
  components: {
    VueHeader,
    VueFooter,
    VueProject,
  },
};
</script>
