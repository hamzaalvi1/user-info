
const signUpform = document.querySelector(".signUp")


class SignUpDetail{
 

static onSubmitHandler(evt){
const signUpInfo = {
  userName: evt.target.elements["user_name"].value,
  email: evt.target.elements["email"].value,
  password: evt.target.elements["password"].value,
  rePassword: evt.target.elements["re-password"].value,
  ph_number: evt.target.elements["ph_number"].value,
}
if(signUpInfo.rePassword !== signUpInfo.password){
  $(document).ready(function(){
    $('#pass-modal').modal();
    $('#pass-modal').modal('open'); 
 });
}
else{
  localStorage.setItem("signUpInfo",JSON.stringify(signUpInfo))
  signUpform.reset()
  $(document).ready(function(){
    $('#redi-modal').modal();
    $('#redi-modal').modal('open'); 
 });
}
}

}
signUpform.addEventListener("submit",(evt)=>{
evt.preventDefault()
  SignUpDetail.onSubmitHandler(evt)
  
  
})