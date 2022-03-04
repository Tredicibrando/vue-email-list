console.log('ciao');

const app = new Vue({
    el: '#app',
    data: {
        email: null,
        emails : [],

    },
    methods: {
        
        fillEmails: function(){
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
            
                   this.email = res.data.response;
                   console.log(this.email);
                   this.emails.push(this.email);
                   
                })
            };
        }
    },

    created(){
        this.fillEmails();
    }

});