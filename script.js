setInterval(()=>{
    var good_night = document.getElementById("good_morning");
    var date = new Date();
    var hour = date.getHours();
    var morning_or_night = "";

    if (hour >= 6 && hour < 12){
        morning_or_night = "- Good morning -";
    }
    else if (hour >= 12 && hour < 17){
        morning_or_night = "- Good afternoon -";
    }
    else if (hour >= 17 && hour < 22){
        morning_or_night = "- Good evening -";
    }
    else if (hour >=22 && hour > 6){
        morning_or_night = "- Good night -";
    }
    good_night.textContent = morning_or_night;
});