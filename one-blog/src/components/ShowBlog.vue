<template>
  <div id="show-blog" v-theme:column="'wind'">
    <!-- 使用Vue过滤器实现搜索 -->
    <input type="text" placeholder="搜索" v-model="search" />
    <!-- 博客总览 -->
    <h1>博客总览</h1>
    <router-link
      class="single-blog"
      v-for="item in filteredBlogs"
      :key="item.id"
      :to="'/blog/'+item.id"
    >
      <h1 v-rainbow>{{item.title|toUppercase}}</h1>
      <article>{{item.content|toSnippet}}</article>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    axios
      .get("https://one-blog-62eb0.firebaseio.com/post.json")
      .then(response => {
        var blogsArray = [];
        for (let key in response.data) {
          response.data[key].id = key;
          blogsArray.push(response.data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  // 局部过滤器
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    toSnippet(value) {
      return value.slice(0, 100) + "...";
    }
  },
  //局部自定义指令
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    },
    theme: {
      bind(el, binding) {
        if (binding.arg == "column") {
          el.style.maxWidth = "1000px";
        }
      }
    }
  }
};
</script>

<style lang="scss">
#show-blog {
  padding: 0 20%;

  // 搜索区域
  input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }

  .single-blog {
    display: block;
    text-decoration: none;
    color: #444;
    padding: 20px;
    margin-bottom: 10px;
    background-color: rgb(180, 173, 173);
    border: 1px dotted #aaa;
  }
}
</style>
