(function(){
"use strict"

setInterval(showDate, 1000);

function showDate() {
    let d = new Intl.DateTimeFormat('ru-RU', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
        d = d.format().split(",");
    
    let date = d[1].substring(0, d[1].length - 2) + "года",
        day = " " + d[0],
        time = d[2].split(":");
        time = getTime(time);

    let strg = "Сегодня" + date + "," + day + "," + time + ".";

        console.log(strg);
    
        function getTime(time) {
            let hour = checkHour(+time[0]),
                minute = time[1] + " минут" + checkEnding(time[1]),
                secunde = time[2] + " секунд" + checkEnding(time[2]);

            let str = " " + hour + " " + minute + " " + secunde + ".";
            return str;
        
            function checkHour(hour){
                let h = hour + " часа";

                if(hour === 1 || hour === 21) {
                    h = hour + " час";
                } else if(hour >= 5 && hour <= 20){
                    h = hour + " часов";
                }

                return h;
            }

            function checkEnding(time) {
                let ending = "";

                if(time[time.length - 1] === "1" && time !== "11") {
                    ending = "a";
                } else if(time[time.length - 1] >= "2" && time[time.length - 1] <= "4" && time[0] !== "1"){
                    ending = "ы";
                }

                return ending;
            }
       }      
    }
})();