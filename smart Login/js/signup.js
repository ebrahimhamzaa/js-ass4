// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   var name = document.getElementById("signupName").value.trim();
//   var email = document.getElementById("signupEmail").value.trim();
//   var password = document.getElementById("signupPassword").value.trim();

//   var emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   var passRegExp = /^.{6,}$/;

//   if (!emailRegExp.test(email)) {
//     document.getElementById("exist").innerHTML = "الإيميل غير صحيح";
//     return;
//   }
//   if (!passRegExp.test(password)) {
//     document.getElementById("exist").innerHTML =
//       "الباسورد لازم يكون 6 حروف أو أكتر";
//     return;
//   }

//   var users = JSON.parse(localStorage.getItem("users")) || [];
//   var found = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//       found = true;
//       break;
//     }
//   }
//   if (found) {
//          document.getElementById("exist").textContent = "الإيميل ده مسجل قبل كده";
//   }
//   else{
//    users.push({ name, email, password });
//     localStorage.setItem("users", JSON.stringify(users));
//      window.location.href = "signin.html";
//   }
// });

//
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   var emailReGex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //ebrahim.hamza@gmal.com
//   var passRegExp = /^.{6,}$/;
//   var nameRegExp = /^[\w\s]{3,}$/

//   var user = {
//     name: document.getElementById("signupName").value.trim(),
//     email: document.getElementById("signupEmail").value.trim(),
//     password: document.getElementById("signupPassword").value.trim(),
//   };
//   if(nameRegExp.test(user.name)){
//     document.getElementById("exist").innerHTML = "الاسم لازم يبقي علي الاقل 3 حؤوف او اكتر";
//     return;
//   }
//   if(emailReGex.test(user.email)){
//       document.getElementById("exist").textContent = "الإيميل غير صحيح";
//       return;

//   }
//   if(passRegExp.test(user.password)){
//     document.getElementById("exist").textContent = "الباسورد لازم يكون 6 حروف أو أكتر";
//     return;
//   }
//   var users = JSON.parse(localStorage.getItem("users")) || [];
//   var found = false;
//   for(var i =0 ; i <users.length; i++ ){
//     if(users[i].email ===users.email){
//       found = true;
//       break;
//     }
//   }
//   if(found){
//           document.getElementById("exist").textContent = "الإيميل ده مسجل قبل كده";
//   }
//   else{
//     users.push(user);
//     localStorage.setItem("users" , JSON.stringify(users));
//     window.Location.href = "signin.html";
//   }

// });

function getFromData() {
  return {
    name: document.getElementById("signupName").value.trim(),
    email: document.getElementById("signupEmail").value.trim(),
    password: document.getElementById("signupPassword").value.trim(),
  };
}
function validatUserData(user) {
  var emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var passRegExp = /^.{6,}$/;
  var nameRegExp = /^[\w\s]{3,10}$/;
  if (!emailRegExp.test(user.email)) {
    return "الإيميل غير صحيح";
  }
  if (!passRegExp.test(user.password)) {
    return "الباسورد لازم يكون 6 حروف أو أكتر";
  }
  if (!nameRegExp.test(user.name)) {
    return "الاسم لازم يبقي علي الاقل 3 حؤوف او اكتر";
  }
  return "";
}
function isEmailRegistered(email) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return true;
    } 
  }
  return false;
}
function saveUserData(user) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users" , JSON.stringify(users));
  }


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var user = getFromData();
  var errorMsg = validatUserData(user);
  if (errorMsg) {
    document.getElementById("exist").innerHTML = errorMsg;
    return;
  }
  

  if(isEmailRegistered(user.email)){
    document.getElementById('exist').innerHTML = "الإيمي دا اتسجل قبل  كده";
    return;
  }
  saveUserData(user);
  window.location.href = "signin.html";
  
});
