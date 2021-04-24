<template>
  <vue-header></vue-header>
  <content-services></content-services>
  <vue-footer></vue-footer>
</template>

<script>
import ContentServices from "../components/ContentServices.vue";
import VueFooter from "../components/VueFooter.vue";
import VueHeader from "../components/VueHeader.vue";

export default {
  name: "ViewServices",
  components: {
    VueHeader,
    VueFooter,
    ContentServices,
  },
};
</script>
