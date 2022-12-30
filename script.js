function submitform(){
    let first=document.getElementById('first').value;
    let last=document.getElementById('last').value;
    let email=document.getElementById('email').value;
    let reason=document.getElementById('reason').value;

    // console.log(FirstName,LastName,Email,Reason);

     if(first  && last  && email  && reason )
     {
         alert("Form Submitted Successfully");
        
    }else{
        alert("All fields are required");
    }
}

// Form Submitted Successfully

// All fields are required