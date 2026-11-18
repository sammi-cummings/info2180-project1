/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.message');
    const emailInput = document.querySelector('#email');

    
    form.addEventListener('submit',(event) =>{
        //Prevents page refresh
        event.preventDefault();
        
        //Gets the email input and removes whitespace
        const email = emailInput.value.trim();

        //Returns messages if email input is empty, else indicate email received and clears input
        if (email === ""){
            messageDiv.textContent = "Please enter a valid email address";
        }
        else{
            messageDiv.textContent = "Thank you! Your email address "+email+" has been added to our mailing list!";
        }
        
    });
});