<template>
  <vue-header></vue-header>
  <content-about></content-about>
  <vue-footer></vue-footer>
</template>

<script>
import VueHeader from "../components/VueHeader.vue";
import ContentAbout from "../components/ContentAbout.vue";
import VueFooter from "../components/VueFooter.vue";

export default {
  name: "ViewAbout",
  components: {
    VueHeader,
    ContentAbout,
    VueFooter,
  },
};
</script>
