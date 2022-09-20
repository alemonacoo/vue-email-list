console.log("JS OK!");

const app = new Vue({
    el: "#app",
    data: {
        emails: [],
        emailsLength: 10
    },
    mounted(){
        for(i=0; i<=this.emailsLength; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            this.emails.push(response.data.response);
            console.log('email is: ' + response.data.response);
          })
          .catch((error) => {
            console.warn(error);
            this.text = 'Sorry, unable to retrieve this email';
          });
        }
        console.log(this.emails);
    }
})