// var now = new Date();
// document.write(now + "<br><br><br>")














// day





// document.write(now.getDate() + "<br><br><br>")

// document.write(now.getDay() + "<br><br><br>")


// document.write(now.getMonth() + "<br><br><br>")

// document.write(now.getFullYear() + "<br><br><br>")




// hours


// document.write(now.getHours() + "<br><br><br>")

// document.write(now.getMinutes() + "<br><br><br>")


// document.write(now.getSeconds() + "<br><br><br>")

// document.write(now.getMilliseconds() + "<br><br><br>")




// now.setDate(20)
// now.setFullYear(2021)
// now.setMonth(4)









// document.write(now + "<br><br><br>")

// document.write(now + "<br><br><br>")


// document.write(now.getSeconds() + "<br><br><br>")

// document.write(now.getMilliseconds() + "<br><br><br>")





// var date = new Date()
// console.log(date)

// console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())
// console.log(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds())













// function myfunction() {
//     var name = "sir"
//     alert(name)
// }


// function myfunction() {
//     alert("HELLO world!")
// }


// myfunction()


// myfunction()

// myfunction()
// myfunction()
// myfunction()


// function myfunction(name) {
//     alert(name)
// }


// myfunction("hello world")




// myfunction("hello sir")


// function myfunction(a, b) {
//     var g = a + b
//     return g;

// }

// var nEw = myfunction(50, 50);
// document.write(nEw + "<br>")

// var nEw = myfunction(50, 60);
// document.write(nEw)



// globalThis
// var a = 10;

// function myfunction() {
//     document.write(a)
// }

// myfunction()



// local   var

// function myfunction() {
//     var a = 10;
//     document.write(a)
// }

// myfunction()
// document.write(a)'






// var day = +prompt("Enter number")




// switch (day) {
//     case 1:
//         document.write("Today is monday")

//         break;

//     case 1:
//         document.write("Today is tuesday")

//         break;
//     case 2:
//         document.write("Today is wesday")

//         break;
//     case 3:
//         document.write("Today is thusday")

//         break;
//     case 4:
//         document.write("Today is friday")

//         break;
//     case 5:
//         document.write("Today is satday")

//         break;
//     default:
//         document.write("This is not ")

//         break;
// }
















var name = prompt("Enter you parcentage")
switch (name) {
    case "A":

        document.write("this is  A")

        break;
    case "B":
        document.write("this is  B")

        break;
    case "C":
        document.write("this is  C")

        break;
    case "D":
        document.write("this is  D")

        break;
    case "E":
        document.write("this is  E")

        break;


    default:
        break;
}





function myfunction(name) {
    // var name = prompt("Enter you parcentage")
    switch (name) {
        case "A":

            document.write("this is  A")

            break;
        case "B":
            document.write("this is  B")

            break;
        case "C":
            document.write("this is  C")

            break;
        case "D":
            document.write("this is  D")

            break;
        case "E":
            document.write("this is  E")

            break;


        default:
            document.write("This is not ")

            break;
    }
}

myfunction("a")


var parcentage = +prompt("Enter parcentage")




switch (parcentage) {
    case (parcentage >= 90 && parcentage <= 100):
        document.write("A+");

        break;


    default:
        break;
}



var age = 10;

switch (true) {
    case (age >= 15 && age <= 20):
        document.write("you are eligibal")
        break;
    case (age >= 21 && age <= 30):
        document.write("you are not eligibal")
        break;

    default:
        document.write("Enter a valid age")

        break;
}


var age = prompt("ENTER YOUR AGE");

switch (true) {
    case (age >= 15 && age <= 20):
        document.write("you are eligibal")
        break;
    case (age >= 21 && age <= 30):
        document.write("you are not eligibal")
        break;

    default:
        document.write("Enter a valid age")

        break;
}