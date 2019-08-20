function myFunction() {
    var name = "";
    var weekday = "";
    var gender = document.getElementById("write").elements[0].value;
    var date = document.getElementById("write").elements[1].value;
    var month = document.getElementById("write").elements[2].value;
    var year = document.getElementById("write").elements[3].value;
    var dob = month + '/' + date + '/' + year;
    var date2 = new Date(dob);
    var day = date2.getDay();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if ((date > 0 && date <= 31) && (month > 0 && month <= 12)) {

        if (day == 0) {
            weekday = weekDays[0]
        }
        else if (day == 1) {
            weekday = weekDays[1]

        }
        else if (day == 2) {
            weekday = weekDays[2]

        }
        else if (day == 3) {
            weekday = weekDays[3]

        }
        else if (day == 4) {
            weekday = weekDays[4]

        }
        else if (day == 5) {
            weekday = weekDays[5]

        }
        else if (day == 6) {
            weekday = weekDays[6]

        }

        if (gender == "male") {
            if (weekday == "Sunday") {
                name = "Kwasi";

            }
            else if (weekday == "Monday") {
                name = "Kwadwo";
            }
            else if (weekday == "Tuesday") {
                name = "Kwabena";
            }
            else if (weekday == "Wednesday") {
                name = "Kwaku";
            }
            else if (weekday == "Thursday") {
                name = "Yaw";
            }
            else if (weekday == "Friday") {
                name = "Kofi";
            }
            else if (weekday == "Saturday") {
                name = "Kwame";
            }

        }
        else if (gender == "female") {
            if (weekday == "Sunday") {
                name = "Akosua";
            }
            else if (weekday == "Monday") {
                name = "Adwoa";
            }
            else if (weekday == "Tuesday") {
                name = "Abenaa";
            }
            else if (weekday == "Wednesday") {
                name = "Akua";
            }
            else if (weekday == "Thursday") {
                name = "Yaa";
            }
            else if (weekday == "Friday") {
                name = "Afua";
            }
            else if (weekday == "Saturday") {
                name = "Ama";
            }
        }
        alert("Your Akan name is " + name)
        console.log('Day is ' + day);
        console.log('Date2 is ' + date2)
        console.log(gender);
        console.log(date);
    } else {
        alert("Enter a valid date format");
    }

}