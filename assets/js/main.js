function showTime(){
    const date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let session = "AM";

    if(hour == 0) hour = 12;
    if(hour > 12){ hour -= 12; session = "PM"; }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const time = hour + ":" + minutes + ":" + seconds + " " + session;
    // document.getElementById("clockDisplay").innerText = time;
    // document.getElementById("clockDisplay1").innerText = time;

    // document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

// function showDate(){

//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();

//     today = mm + '.' + dd + '.' + yyyy;
//     document.getElementById("dateDisplay").innerText = today;
// }
// showDate();
