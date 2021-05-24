<template>
  <main>
    <h2>About me:</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      vitae, quam odit unde, ducimus est dolorem maiores quasi vel eligendi
      harum voluptatum odio! Perferendis dolor architecto quia sit, ipsa soluta,
      illo dolores, quae atque neque veritatis modi dicta qui tempore iure
      consequuntur mollitia accusamus nostrum beatae. Provident quasi error
      officia ab odio voluptas omnis, et possimus nihil, debitis laudantium
      tempora voluptatem quibusdam molestias minus. Quis magni iste enim.
      Corporis impedit illo deleniti dolore ipsa illum accusantium est, alias
      culpa vitae nostrum, enim qui architecto cupiditate porro veniam, nemo
      commodi sed repellendus numquam repellat. Commodi ex iusto quia deleniti
      eaque distinctio, veniam inventore harum illo mollitia, veritatis officiis
      minima obcaecati incidunt! A at ea in consectetur expedita amet harum!
      Autem ipsam consectetur delectus animi magnam soluta!
    </p>
  </main>
</template>

<script>
export default {
  name: "ContentHome",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";
@import "@/style/scss/mixins.scss";
main {
  @include align;
  p {
    width: 30vw;
  }
}
</style>
