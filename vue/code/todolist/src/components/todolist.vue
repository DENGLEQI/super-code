<template>
  <section class="todoapp">
    <!-- 头部区域 -->
    <!-- 输入框 -->
    <todo-top></todo-top>
    <!-- 内容区域-->
    <section class="main" v-show="taskList.length">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCheck" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          :class="{ completed: item.completed, editing: oItem == item }"
          v-for="(item, index) in taskList"
          :key="item.id"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.completed" />
            <label v-text="item.content" @dblclick="bdl(item)"></label>
            <button class="destroy" @click="remove(index)"></button>
          </div>
          <input
            class="edit"
            :value="item.content"
            @keyup.13="join(item, index, $event)"
            @blur="join(item, index, $event)"
            @keyup.esc="onJoin"
          />
        </li>
      </ul>
    </section>
    <!-- 功能按钮区域 -->
    <footer class="footer" v-show="taskList.length">
      <span class="todo-count">
        <strong>0</strong> item left
      </span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/all">所有事项</a>
        </li>
        <li>
          <a href="#/active">已完成事项</a>
        </li>
        <li>
          <a href="#/completed">未完事项</a>
        </li>
      </ul>
      <button class="clear-completed" @click="uncom">清除已完成事项</button>
    </footer>
  </section>
</template>
<script>
// 引入外部资源
import "../css/base.css";
import "../css/index.css";
import "../js/vue";

import todoTop from "./todotop";
export default {
  data: function() {
    return {
      //数据
      tex: "",
      oItem: null,
      hx: "",
      filterdata: [],
      taskList: [
        {
          id: 1,
          content: "吃饭饭",
          completed: false
        },
        {
          id: 2,
          content: "睡觉觉",
          completed: true
        },
        {
          id: 3,
          content: "打豆豆",
          completed: false
        },
        {
          id: 4,
          content: "哈哈哈",
          completed: true
        }
      ]
    };
  },
  methods: {
    //方法
    add(ev) {
      //添加一条任务
      if (this.tex) {
        let obj = {
          id: this.taskList.length + 1,
          content: this.tex,
          completed: false
        };
        this.taskList.push(obj);
        this.tex = "";
        ev.target.focus();
      }
    },
    remove(index) {
      //删除一条任务
      if (confirm("您确定要删除吗？")) {
        this.taskList.splice(index, 1);
      }
    },
    bdl(item) {
      //选中状态
      this.oItem = item;
    },
    join(item, index, ev) {
      //修改任务
      if (!ev.target.value) {
        //内容为空时删除
        this.remove(index);
        return;
      }
      // 不为空时修改
      item.content = ev.target.value;
      this.oItem = null;
    },
    onJoin() {
      //取消修改任务
      this.oItem = null;
    },
    uncom() {
      this.taskList = this.taskList.filter(item => !item.completed);
    }
  },
  computed: {
    //计算属性
    allCheck: {
      get() {
        //设置全选 M-V
        return this.taskList.every(item => item.completed);
      },
      set(val) {
        this.taskList.forEach(item => (item.completed = val));
      }
    }
  },
  watch: {
    hx(newval) {
      // console.log(newval);
      switch (newval) {
        //过滤留下未完成
        case "active":
          this.filterdata = this.taskList.filter(item => !item.completed);
          break;
        //过滤留下已完成
        case "completed":
          this.filterdata = this.taskList.filter(item => item.completed);
          break;
        default:
          this.filterdata = this.taskList;
          break;
      }
      // console.log(this.filterdata);
    }
  },
  components: {
    todoTop
  }
};
</script>
