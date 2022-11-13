class Login{
    
    get username () { return $('#ember6') }
    get password () { return this.driver.$('#password') }
    
    get submitBtn () { return $('form button[type="submit"]') }

    async getUser(){
        console.log("userName-> "+this.username);
    }

    async submit () {
        await this.submitBtn.click()
    }

    
}

//module.exports = new Login();