$(document).ready(function(){
    $('select').formSelect();
  });
const userDetailForm = document.querySelector(".user-details")

class UserDetails{
static onUserDetailHandler(evt){

  const user_detail = {
  firstName : evt.target.elements["first_name"].value,
  lastName : evt.target.elements["last_name"].value,
  gender : evt.target.elements["gender"].value,
  city : evt.target.elements["city"].value,
  state : evt.target.elements["state"].value,
  designation : evt.target.elements["designation"].value,
  company : evt.target.elements["company"].value,
  learningDistance : evt.target.elements["learning-Distance"].value,
}
if(user_detail.city === "" || user_detail.state ===  "" || user_detail.learningDistance === ""){
  $(document).ready(function(){
    $('#error-modal').modal();
    $('#error-modal').modal('open'); 
 });
}
else{
  let signUpDetail = JSON.parse(localStorage.getItem("signUpInfo"))
  localStorage.removeItem("signUpInfo")
  let fullDetail = {...signUpDetail,...user_detail}
  _db.collection("userList").add(fullDetail)
  .then(()=>console.log("user added"))
  .catch((err)=> console.log(err))
  userDetailForm.reset()  
  $(document).ready(function(){
    $('#redi-modal').modal();
    $('#redi-modal').modal('open'); 
 });
}

}

}



userDetailForm.addEventListener("submit",(evt)=>{
  evt.preventDefault()
  UserDetails.onUserDetailHandler(evt)
})