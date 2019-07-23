<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="item in blog.category">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("https://one-blog-62eb0.firebaseio.com/post/" + this.id + ".json")
      .then(response => {
        this.blog = response.data;
      });
  },
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  }
};
</script>

<style lang="scss" scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #eee;
  border: 1px solid #aaa;
}
</style>
