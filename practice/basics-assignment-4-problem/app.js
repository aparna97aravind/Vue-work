const app = Vue.createApp({
data() {
    return {
        textDisplay : "",
        toggle : false,
        color : ''
    }
},
methods : {
    toggledata() {
        this.toggle = !this.toggle
        console.log(this.toggle)
    }
},
computed : {

}
})
app.mount("#assignment");