<template>
  <div id="app">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 切换标签页 -->
    <van-tabs v-model="active1">
      <van-tab title="推荐">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image
              width="100%"
              height="100%"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/825877a807ee3f2b9d580ed4d932fd77.jpg?thumb=1&w=720&h=360"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              width="100%"
              height="100%"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff3e608e7f4587b5bf62ea59efaf26e9.jpg?thumb=1&w=720&h=360"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              width="100%"
              height="100%"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fe7acee338cd6f711e9a8bd57d0642b1.jpg?thumb=1&w=720&h=360"
            />
          </van-swipe-item>
        </van-swipe>
        <!-- 宫格 -->
        <van-grid :gutter="10">
          <van-grid-item
            v-for="value in 8"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
        <!-- 自定义内容区 -->
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in imgs" :key="item">
            <van-image src="{{ item }}" />
          </van-grid-item>
          <!-- <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item> -->
        </van-grid>
      </van-tab>
      <van-tab title="手机">内容 2</van-tab>
      <van-tab title="智能">内容 3</van-tab>
      <van-tab title="电视">内容 4</van-tab>
      <van-tab title="笔记本">内容 4</van-tab>
    </van-tabs>
    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
// 引入子导航
// import Home from "./pages/home";

Vue.use(Vant);
export default {
  name: "app",
  components: {},
  data() {
    return {
      value: "",
      active1: "",
      active: "",
      imgs: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/67af8c5df281feb89083c94a69ad4e23.jpg?thumb=1&w=344&h=280",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c57cab6baca6d2b23ba3c81df8b72abc.jpg?thumb=1&w=344&h=280",
        "//i8.mifile.cn/v1/a1/1ed6a607-21e5-8d85-e0e9-dfb07571fc6a.webp",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360",
        "//i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20.webp",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c33f008a86c151a1500d44d599351256.jpg?thumb=1&w=360&h=360",
        "//i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp",
        "//i8.mifile.cn/v1/a1/b883172b-5aa3-7855-678f-c615109ee0a7.webp"
      ]
    };
  },
  methods: {
    //放方法
    onSearch() {},
    onCancel() {}
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
