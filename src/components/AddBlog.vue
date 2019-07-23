<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form action class="form" v-if="!submitted">
      <!-- 博客标题 -->
      <label for>博客标题:</label>
      <input type="text" v-model="blog.title" required />
      <!-- 博客内容 -->
      <label for>博客内容</label>
      <textarea v-model="blog.content" id cols="30" rows="10"></textarea>
      <!-- 博客分类 -->
      <div id="checkboxes">
        <label for>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label for>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label for>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label for>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories" />
      </div>
      <!-- 作者 -->
      <label for>作者</label>
      <select v-model="blog.author">
        <option v-for="item in authors" :key="item">{{item}}</option>
      </select>
      <!-- 添加博客 -->
      <button @click.prevent="post">添加博客</button>
    </form>

    <div v-if="submitted">
      <h3>你的博客发布成功</h3>
    </div>

    <!-- 博客总览 -->
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：{{blog.content}}</p>
      <ul>
        <li v-for="item in blog.categories" :key="item">博客分类：{{item}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["lxy", "cyy"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      console.log(this.submitted);
      // 提交博客数据
      axios
        .post("https://one-blog-62eb0.firebaseio.com/post.json", this.blog)
        .then(data => {
          //提交数据成功，然后 显示‘博客总览’，隐藏‘添加博客’
          this.submitted = true;
        });
      // 跳转到博客总览页面
      setTimeout(() => {
        this.$router.push({ path: "/display" });
      }, 3000);
    }
  }
};
</script>

<style scoped lang="scss">
.add-blog {
  padding: 0 20%;
  .form {
    display: flex;
    flex-direction: column;
  }
}
</style>

