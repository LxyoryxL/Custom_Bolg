<template>
  <nav>
    <ul>
      <li>
        <router-link to="/display" exact>博客总览</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
nav {
  background-color: crimson;
  padding: 30px 0;
  margin-bottom: 40px;
  ul {
    list-style: none;
    text-align: center;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: white;
        text-decoration: none;
        padding: 12px;
        margin: 0 4px;
        border-radius: 5px;
      }
      .router-link-active {
        background-color: rgba(255, 255, 255, 0.8);
        color: #444;
      }
    }
  }
}
</style>
