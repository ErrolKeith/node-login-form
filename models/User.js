let User = function(data) {
    this.data = data
}

User.prototype.login = function(){
    //needs to be a promise for eventual db conection request
    //in an actual production environment the credentials should be stored in a database.
    return new Promise((resolve, reject) => {
        if(this.data.email.trim() == "test@mail.com" && this.data.password == "password"){//placeholders
            resolve("success")
        } else {
            reject("fail")
        }
    })
}

module.exports = User