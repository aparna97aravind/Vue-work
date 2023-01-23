const app = Vue.createApp({
    data() {
        return {
            number: 0,

        }
    },
    methods: {
        add(num) {
            this.number = this.number + num;
        }
    },
    computed: {
        result() {
            if (this.number > 37) {
                return "Too Much";
            }
            else if (this.number < 37) {
                return 'Not there yet';
            }
            else {
                return this.number;
            }
        }
    },
    watch: {
        result() {
            that = this;
            setTimeout(function () {
                that.number = 0;
            }, 5000)
        }
    }

})
app.mount("#assignment");