




// The function sendMessage() will send the data to whatsup from form
   const sendMessage = () => {
   const messageType = "Appointment"
   const name    = document.getElementById("full_name").value;
   const email   = document.getElementById("email").value;
   const contact = document.getElementById("contactNumber").value;
   const message = document.getElementById("message").value;

   const url     = "http://wa.me/918590628664?text="
    +"*Name  :* "+name+"%0a"
    +"*Eamil :* "+email+"%0a"
    +"*contact :* "+contact+"%0a"
    +"*message :* "+message;
    +"*Message Type :* "+messageType;

    window.open(url,'_blank').focus();
}







//--------------Form validation-------------//
const form_sub     = document.getElementById("form")
const form_name    = document.getElementById("name")
const form_eamil   = document.getElementById("email")
const form_contact = document.getElementById("contactNumber")

form_sub.addEventListener("submit",(event)=>{
   event.preventDefault();
   validateForm()
})

const validateForm = () =>{
   
   const userName    = form_name.value.trim();
   const userEmail   = form_eamil.value.trim();
   const userContact = form_contact.value.trim();

}


