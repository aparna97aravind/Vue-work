<template>
    <div id="container">
      <h3 class="text-center mt-5">LIST YOUR TASKS HERE</h3>
  
      <div class="d-flex">
        <input v-model="task" type="text" placeholder="Enter Task" class="form-control" />
        <button class="btn btn-warning rounded-0">SUBMIT</button>
      </div>
  
      <!--todo task table -->
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">TASK</th>
            <th scope="col" style="width: 120px">STATUS</th>
            <th scope="col" class="text-center">EDIT</th>
            <th scope="col" class="text-center">DELETE</th>
          </tr>
        </thead>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          {
            name: "Learn vue and practice.",
            status: "to-do"
          },
          {
            name: "Finish Assignments.",
            status: "In Progress"
          }
        ]
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  </style>