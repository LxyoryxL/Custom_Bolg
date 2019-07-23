<template>
  <div class="add-blog">
    <h2>编辑博客</h2>
    <form action class="form" v-if="!submitted">
      <!-- 博客标题 -->
      <label for aria-placeholder>博客标题:</label>
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
      <button @click.prevent="post">编辑博客</button>
    </form>

    <div v-if="submitted">
      <h3>你的博客发布成功</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "add-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["lxy", "cyy"],
      submitted: false
    };
  },
  created() {
    //   请求编辑的旧博客信息
    this.fetchData();
  },
  methods: {
    post: function() {
      console.log(this.submitted);
      // 更新博客数据
      axios
        .put(
          "https://one-blog-62eb0.firebaseio.com/post/" + this.id + ".json",
          this.blog
        )
        .then(data => {
          console.log(data);
          //提交数据成功，然后 显示‘博客总览’，隐藏‘添加博客’
          this.submitted = true;
        });
    },
    //   请求编辑的旧博客信息
    fetchData: function() {
      axios
        .get("https://one-blog-62eb0.firebaseio.com/post/" + this.id + ".json")
        .then(response => {
          this.blog = response.data;
        });
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

