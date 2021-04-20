<template>
  <main>
    <div class="content">
      <div class="paragraph-wrapper">
          <h2>Hello, I'm Ivan</h2>
          <br>
          <p class="about">
            Hello.
            <br>
            My name is Ivan. I am a web developer based in norway, working mostly on frondend apps, with a great knowlage of:
            <ul>
              <br>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>wasm</li>
            </ul>
          </p>
      </div>
     <img src="@/assets/handsome_modafaka.jpg" alt="handsome and smart web developer">
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/_variables.scss";

main {
  background-color: $main_color; 
  height: $content_height;
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: $border_width solid $font_color;

}
.content {
  display: flex;
  width: $cwidth;

  margin-left: $left_margin;
  border-radius: 50px;

  background-color: $side_color;
  transition: background-color 0.5s, width 1s;
}
.paragraph-wrapper {
  width: 320px;
  padding: 40px;
  
}
img {
  width: $img_width;
  height: auto;
}
.content:hover {
  background-color: $side_color_hover;
  width: $cwidth_hover;
}
h2 {
  display: block;
}
p {
  line-height: 1.5rem;
  
}

</style>
