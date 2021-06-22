(function(){
"use strict"

let users = [
        {
            name: "Luke Skywalker",
            login: "Jedi",
            password: "starkiller",
        },

        {
            name: "Darth Vader",
            login: "YourDaddy",
            password: "padme"
        },

        {
            name: "Chewbacca",
            login: "Chewie",
            password: "rrraaa"
        }
    ]

    authorize();

    function authorize() {
        let userId = checkLogin();
        if(!userId) return;
        let password = checkPassword();
        if(!password) return; 

        alert("Hello, " +  userId.name + "!");

        function checkLogin(){
            let idData = prompt("Enter your login:"),
                isCorrect;

            if(idData === null) {
                alert("Autherization is terminated!");
                return;
            }

            for(let i = 0; i < users.length - 1; i++){
                isCorrect = (users[i].login === idData)? true : false;
                if(isCorrect) {
                    idData = users[i];
                    break;
                }
            }
            
            if(!isCorrect) {
                alert("No such user. Check your login.");
                idData = checkLogin();
            }

            return idData;
        }

        function checkPassword(term, idData){
            let data = prompt("Enter your password:");

            if(data === null) {
                alert("Autherization is terminated!");
                return;
            }

            if(data !==  userId.password) {
                alert("Incorrect password. Try agane.");
                data = checkPassword();
            }

            return data;
        }
    }

})();