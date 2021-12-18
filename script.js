const mail=document.getElementById('mail'); 
const password=document.getElementById('password');
const form=document.getElementById('form');

// TODO change the title-tweak element to "error" using innerText 
form.addEventListener('submit',e=>{
    if(password.value.length<6){
        window.alert("password must be contain atleast 6 characters");
       
      e.preventDefault();
     }
})