<template>
  <div>
    <h2>Hello world</h2>
    <todolist></todolist>
  </div>
</template>

<script>
import todolist from "./components/todo-list.vue";

export default {
  name: "App",
  components: {
    todolist
  }
};
</script>
