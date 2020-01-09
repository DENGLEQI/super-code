<template>
  <div id="app">
    <!-- 三:调用子组件 -->
    <todo-list></todo-list>
  </div>
</template>

<script>
// 一:引入一个子组件
import todoList from "./components/todolist";

export default {
  name: "app",
  components: {
    // 二:局部组件注册
    todoList
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
  margin-top: 60px;
}
</style>
