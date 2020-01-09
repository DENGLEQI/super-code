<template>
  <header class="header">
    <h1>Are you ok ?</h1>
    <input class="new-todo" placeholder="添加未完成事项" v-model.trim="tex" @keyup.13="add" />
  </header>
</template>
<script>
export default {
    
};
</script>