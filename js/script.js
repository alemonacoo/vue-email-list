console.log("JS OK!");

const EMAILS_LENGTH = 10;

const app = new Vue({
    el: "#app",
    data: {
        emails: [],
        EMAILS_LENGTH,
        loading: false
    },
    mounted(){
        for(i=0; i<this.EMAILS_LENGTH; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            if(response.status === 200){
            this.emails.push(response.data.response);
            console.log('email is: ' + response.data.response);
            if(this.emails.length == EMAILS_LENGTH){
                this.loading = true;
            }
        }
          })
          .catch((error) => {
            console.warn(error);
          });
        }
    }
})