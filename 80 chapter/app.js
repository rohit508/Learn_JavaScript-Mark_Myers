// ===========Object:
// ==============This is Object syntax



/* var A = {
    firstName: "JOHN",
    lateName: " mark",
    age: 18,
    gender: "male"

}
console.log(A.firstName)
console.log(A.lateName)
console.log(A.age)
console.log(A) */


// ==============This is Object syntax with array...

/* 
var b = {
    fname: "john",
    lname: "john",
    age: 18,
    gender: "male",
    favMovies: ["movies1", "movies2", "movies3"],
    favFood: ["food1", "food2", "food3"],
}
console.log(b)
console.log(b.favMovies)
console.log(b.favFood)
console.log(b.favFood[0]) */




// ==============This is Object syntax with Methods...



/* var c = {
    fName: "john",
    lName: "john",
    age: 18,
    gender: " MALE",
    fullName: function() {
        return this.fName + " " + this.lName
    }

}


document.write(c.fullName())

console.log(c.fullName())



var product = {
    book: 500,
    quantity: 5,
    total: function() {
        return this.book * this.quantity
    }
}
console.log(product.total()) */



// ==============This is Object syntax with object...



// var d = {
//     fname: "john",
//     lname: "john",
//     age: 18,
//     living: {
//         "city": "karaci",
//         "country": "Pakistan"
//     }
// }

// console.log(d.living.city)


// var d = {
//     fname: "john",
//     lname: "john",
//     age: 18,
//     living: {
//         "city": "karaci",
//         "country": "Pakistan"
//     }
// }

// console.log(d.living.country)
// console.log(d.fname)
// console.log(d)




// ================== second methods of object 






/* 

var person = new Object();
person.firstNAME = "john",
    person.lateNAME = "john";
console.log(person.firstNAME)
console.log(person.lateNAME)
document.write(person.firstNAME + "<br>")
document.write(person.lateNAME) */











// function submit() {
//     var Firstname = document.getElementById('fname');
//     var lastname = document.getElementById('lname');
//     var form = {
//         firstName: Firstname.value,
//         lastname: lastname.value,




//     }
//     Firstname.value = " ",
//         lastname.value = " "

//     console.log(form)
// }




// var d = {
//     fname: "john",
//     lname: "john",
//     age: 18,
//     living: {
//         "city": "karaci",
//         "country": "Pakistan"
//     }
// }

// console.log(d.living.city)







// var formname = {
//     firstName: "john",
//     lastname: "john",
//     fullName: function() {
//         return this.firstName + " " + this.lastname

//     }



// }

// console.log(formname.fullName())



// var c = {
//     fName: "john",
//     lName: "john",
//     age: 18,
//     gender: " MALE",
//     fullName: function() {
//         return this.fName + " " + this.lName
//     }

// }
// console.log(c.fullName())


// document.write(c.fullName())




// var form = {
//     fname: "john",
//     lname: "john",
//     FULLname: function() {
//         return this.fname + "  " + this.lname
//     }

// }
// delete form.fname
//     // delete form.lname
// console.log(form)




// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };


// var plan2 = {
//     name: "professional",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };

// var plan3 = {
//     name: "ultimate",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };
// console.log(plan1)
// console.log(plan2)
// console.log(plan3)




// console.log([plan1])
// console.log([plan2])
// console.log([plan3])



// function Plan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
// }
// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
// var plan2 = new Plan("professional", 3.99, 100, 1000, 10);
// var plan3 = new Plan("ultimate", 3.99, 100, 1000, 10);
// console.log([plan1], [plan2], [plan3])





// function User(fname, lname, age, gender) {

//     this.firstname = fname
//     this.lastname = lname
//     this.age = age
//     this.gender = gender
// }

// var user1 = new User('john', 'john', '18', 'male')
// var user2 = new User('john', 'john', '18', 'male')
// var user3 = new User('john', 'john', '18', 'male')
// var user4 = new User('john', 'john', '18', 'male')
// console.log([user1], [user2])


// function User(fname, lname, age, gender) {
//     this.first = fname
//     this.last = lname
//     this.age = age
//     this.gender = gender
// }

// function submit() {
//     var fname = document.getElementById("fname")
//     var lname = document.getElementById("lname")
//     var age = document.getElementById("age")
//     var gender = document.getElementById("gender")
//     var user = new User(fname.value, lname.value, age.value, gender.value)
//     console.log([user])


// }




// function User(fname, lname, age, gender) {
//     this.first = fname
//     this.last = lname
//     this.age = age
//     this.gender = gender
// }

// function submit() {
//     var fname = document.getElementById("fname")
//     var lname = document.getElementById("lname")
//     var age = document.getElementById("age")
//     var gender = document.getElementById("gender")
//     var user = new User(fname.value, lname.value, age.value, gender.value)
//     console.log([user])




// }






// is as hum propertity check kar tha han

// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }



// console.log("fname" in User)


// is sa hum puraobject ki propertity get kar le ga 
// using this   forloop var ( var in(object));

// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }


// for (var prop in User) {
//     console.log(prop)
// }



// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }


// for (var prop in User) {
//     console.log(User[prop])
// }




// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }


// for (var prop in User) {
//     console.log(prop)
// }



// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }


// for (var prop in User) {
//     console.log(prop + " " + User[prop])


// }




// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }


// for (var prop in User) {

//     console.log(prop, User[prop])

// }


// var User = {
//     fname: "john",
//     lname: "john",
//     age: "16",
// }



// console.log(User.hasOwnProperty('age'));




// prototype 




// var Mobile = function(module) {

//     // instance member 
//     this.module = module
//     this.price = 3000;
// }

// var samsung = new Mobile("galaxy");
// var nokia = new Mobile("3100");

// // samsung.color = "white"
// // nokia.color = "white"





// // prototypeee ...
// Mobile.prototype.color = "white"
// console.log(nokia)
// console.log(samsung)



// ================================ getting link ==== setting the url ===




// console.log(location);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.host);
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);





// location.href = "https://www.yahoobaba.net";


// function link() {
//     location.href = "https://www.yahoobaba.net";

// }
// function openWindow() {

//     var monkeyWindow = window.open();
//     var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a.< /p>";
//     monkeyWindow.document.write(windowContent);
// }


// function openWindow() {
//     var open = window.open()

// }


// function closeWindow() {
//     monkeyWindow.close();

// }






// function openWindow() {
//     var open = window.open("https://www.google.com/", "_parent")

// }

// function openWindow() {
//     var open = window.open("https://www.facebook.com/", "", "width=500px", "height=200px")

// }

// var A;




// function openWindow() {

//     A = window.open("https://www.facebook.com/", "", "width=500px", "height=200px")
// }

// function closeWindow() {
//     A.close();

// }



// function checkForPopBlocker() {
//     var testPop = window.open("", "", "width=100,height=100");
//     if (testPop === null) {
//         alert("Please disable your popup blocker.");
//         return;
//     }
//     testPop.close();
// }