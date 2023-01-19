const app = Vue.createApp({
    data() {
        return {
            name: "Aparna Aravind",
            age: 25,
            link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/800px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg"
        };
    },
    methods: {
        ageinFiveYears() {
            return this.age + 5;
        },
        randomNumb() {
            return Math.random()
        }
    }
});

app.mount("#assignment");