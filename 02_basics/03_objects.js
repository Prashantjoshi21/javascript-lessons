const mySym = Symbol("key1")

const JsUser = {
    name : "Prashant",
    [mySym] : "mykey1",
    age : "21",
    location : "delhi",
    email :"PRashantjoshi@gmail.com",
    isLoggedIn : false,
    lastLooggedInDays : ["tuesday", "wednesday"]    
}

console.log(JsUser.email);
console.log(JsUser.isLoggedIn);
console.log(JsUser.age);
console.log(typeof JsUser[mySym]);
