<template>
  <div>
    <h2>Hello, I'm ivan</h2>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta
        delectus qui quis. Quidem corrupti soluta perferendis impedit, tempore
        nihil, eligendi sequi nesciunt repudiandae quos magni odit optio iusto
        eos culpa dolores, incidunt id sed accusantium repellat officiis
        asperiores enim et ullam! Magnam est laboriosam illum pariatur doloribus
        rerum ea accusamus quibusdam iusto, tempora excepturi fugiat animi saepe
        explicabo totam at sunt repellat eos cumque in dolorum soluta quam
        optio! Tempore nostrum ad aut quas.
      </p>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY1200_CR162,0,630,1200_AL_.jpg"
        alt=""
      />
    </div>
    <h3>yeah something like that</h3>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  background: #eee;
}
h2 {
  display: block;
}
p {
  width: 500px;
}
img {
  height: 400px;
}
</style>
