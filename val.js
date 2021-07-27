function valid()
{
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var confirm  = document.getElementById("cpassword").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var pin = document.getElementById("pinno").value;
  
   var user = /^[A-Za-z.]{3,30}$/;
   var pass= /^(?=.*[0-9])(?=.*[!@#&%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
   var eml = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
   var mob =/^[789][0-9]{9}$/;
   var pincheck = /^[0-9]{6}$/;
   if(user.test(username))
   {
       document.getElementById("user").innerHTML=" ";
   }
   else
   {
       document.getElementById("user").innerHTML="** username is invalid";
       return false;
   }
   if(pass.test(password))
   {
       document.getElementById("pass").innerHTML=" ";
   }
   else
   {
       document.getElementById("pass").innerHTML="** password is invalid";
       return false;
   }
   if(confirm.match(password))
   {
       document.getElementById("cpass").innerHTML=" ";
   }
   else
   {
       document.getElementById("cpass").innerHTML="** password not matched";
       return false;
   }
   if(eml.test(email))
   {
       document.getElementById("eml").innerHTML=" ";
   }
   else
   {
       document.getElementById("eml").innerHTML="** email is invalid";
       return false;
   }
   if(mob.test(phone))
   {
       document.getElementById("mobile").innerHTML=" ";
   }
   else
   {
       document.getElementById("mobile").innerHTML="** phone no is invalid";
       return false;
   }
   if(pincheck.test(pin))
   {
       document.getElementById("pin").innerHTML=" ";
   }
   else
   {
       document.getElementById("pin").innerHTML="** pin no is invalid";
       return false;
   }


}