<template>
  <div>
    <h2 class="text-center mt-5">TODO LIST APP</h2>
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
