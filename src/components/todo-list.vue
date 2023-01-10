<template>
  <div id="container">
    <h3 class="text-center mt-5">LIST YOUR TASKS HERE</h3>

    <div class="d-flex">
      <input v-model="task" type="text" placeholder="Enter Task" class="form-control" />
      <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
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
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span>{{ task.name }}</span>
          </td>

          <td>
            <span
              @click="changeStatus(index)"
              :class="{
            'text-danger' : task.status === 'to-do',
            'text-success': task.status === 'Finished',
            'text-warning': task.status === 'In Progress'
           }"
            >{{ task.status }}</span>
          </td>

          <td>
            <div class="text-center" @click="updateTask(index)">
              <span class="fa fa-pen"></span>
            </div>
          </td>

          <td>
            <div class="text-center" @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      task: "",
      editTask: null,
      statuses: ["to-do", "In Progress", "Finished"],
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
     //create
     submitTask() {
      if (this.task.length === 0) return; //entered task is empty

      if (this.editTask === null) {
        this.tasks.push({
          name: this.task,
          status: "to-do"
        });
      } else {
        this.tasks[this.editTask].name = this.task;
        this.editTask = null;
      }
      this.task = " ";
    },

    // delete
    deleteTask(index) {
      console.log(index);
      this.tasks.splice(index, 1);
    },

    // update
    updateTask(index) {
      this.task = this.tasks[index].name;
      this.editTask = index;
    },
    //Switch the statuses
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    }
  }
  };
</script>
  
<style scoped>
</style>