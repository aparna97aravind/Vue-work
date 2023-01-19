const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            usersInput: ' '
        }
    },
    methods: {
        showAlert() {
            alert('Button Pressed');
        },
        setUserInput(event) {
            this.userInput = event.target.value;
        },
        setUsersInput(event) {
            this.usersInput = event.target.value;
        }
    }

}).mount("#assignment")