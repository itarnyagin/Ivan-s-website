<template>
  <vue-header></vue-header>
  <services-content></services-content>
  <vue-footer></vue-footer>
</template>

<script>
import ServicesContent from '../components/ServicesContent.vue';
import VueFooter from "../components/VueFooter.vue";
import VueHeader from "../components/VueHeader.vue";

export default {
  name: "Services",
  components: {
    VueHeader,
    VueFooter,
    ServicesContent,
  },
};
</script>
