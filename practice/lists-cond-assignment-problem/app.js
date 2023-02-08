const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
            toggle : true,

        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
        toggleList() {
            this.toggle = !this.toggle;
        }
    }
})

app.mount("#assignment");