<template>
  <vue-header></vue-header>
  <div class="about">
    <h1>This is a projects page</h1>
  </div>
  <vue-footer></vue-footer>
</template>

<script>
import VueFooter from "../components/VueFooter.vue";
import VueHeader from "../components/VueHeader.vue";

export default {
  name: "Projects",
  components: {
    VueHeader,
    VueFooter,
  },
};
</script>
