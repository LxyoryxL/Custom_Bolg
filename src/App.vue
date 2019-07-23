<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlog from "./components/ShowBlog.vue";
import BlogHeader from "./components/BlogHeader.vue";
import SingleBlog from "./components/SingleBlog.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    BlogHeader,
    AddBlog,
    ShowBlog,
    SingleBlog
  }
};
</script>

<style>
</style>
