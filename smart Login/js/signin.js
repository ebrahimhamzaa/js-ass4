// sign in
// function getFormData() {
//   return{
//     email:document.getElementById("signinEmail").value.trim(),
//     password:document.getElementById("signinPassword").value.trim(),
//   }

// }

function getsignFromData() {
  return {
    email: document.getElementById("signinEmail").value.trim(),
    password: document.getElementById("signinPassword").value.trim(),
  };
}

function validateSigninData (user) {
    if (user.email === "" || user.password === "") {
    return "من فضلك أدخل البريد وكلمة المرور";
  }
  return "";
}
function foundUser(email , password) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  for(var i = 0 ; i < users.length ; i++){
    if(users[i].email == email &&  users[i].password == password){
      return users[i];
    }
  }
  return null;
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
 var user = getsignFromData();
 var error = validateSigninData(user);
 if(error){
  document.getElementById("incorrect").innerHTML = "من فضلك ادخل كلمة المرور + الباسورد ";
  return;
 }
 
 var foundUser = foundUser(user.email , user.password);
  
  if (foundUser) {
    localStorage.setItem("currentUserName", found.name);
    window.location.href = "welcome.html";
  } else {
    document.getElementById("incorrect").innerHTML =
      "الإيميل أو كلمة المرور غير صحيحة";
  }
});
