<template>
  <header>
    <h1>Ivan Tarnyagin</h1>
    <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
        </ul>
    </nav>
    <button id="changeMode">Change Mode</button>
  </header>
</template>

<script>
export default {
  name: "VueHeader",
};
</script>

<style lang="scss" scoped>
header {
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 13vh;
}
h1 {
  font-size: 2em;
  display: inline-block;
  margin-left: 200px;
}
ul {
  list-style: none;
}
li {
  display: inline;
  margin-left: 25px;
}
button {
  height: 40px;
}
</style>
