// // email pattern 

let email = 'sheiksomrat99@gmail.com';

let emailCheck = /^[a-z0-9\._]*@[a-z0-9-]*\.[a-z]{2,7}$/;

console.log(emailCheck.test(email));




// bangladeshi phone number pattern


let phn = "01726820147";

let phnNumber = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(phnNumber.test(phn));


// username pattern

let user ="somrat99";

let userCheck = /^[a-z0-9-_]{6,16}$/;

console.log(userCheck.test(user));


// password pattern 

let pass ="Shahariar2580@#";

let passWord =/^[A-Z]{1,3}[a-zA-Z0-9\._@#%*]*$/;

console.log(passWord.test(pass));


// bd zipcode pattern  

let zip = "5880";

let zipCode =/^[0-9]{4}/;

console.log(zipCode.test(zip));


// END