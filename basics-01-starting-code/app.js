const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalHtml: '<b>Have fun!</b>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber <= 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});

app.mount('#user-goal');