// Scripts used in Index.html for updaing graduates per year and employment rate
// and validation of the form script

// start the count with 0
const start = 0;
//increment each step by 10
const increment = 10;
var current = start;
// creating upper bound of the count with random
var target = Math.floor(Math.random()*1001) + 1000 
// display the current number to HTMl element 
var inputAnim = document.getElementById("counter1");
// increase 
current+= increment;

// updates counter for graduates per year
function updateGrads()
{
    // if counter is less then the targer keep incrementing the counter
    if (current <= target)
    {
        // update corresponding HTML element
        inputAnim.textContent = current;
        // increment the current value
        current+=increment;
        // update every 10 miliseconds
        setTimeout(updateGrads,10);
    }
    else
    {
        // if HTML element value is less than last incremented value- stop
        inputAnim.textContent=target;
    }
    
}     

// variable to hold current value
var percentCount=0;
// updated the "employment rate within first year"
function updateRate ()
{   
    // keep updating if current value of counter is less then target
    if(percentCount <= (target/100+3.14))
    {
        document.getElementById("counter2").textContent = percentCount;
        percentCount+=1;
        setTimeout(updateRate,100);
    }
    // stop if counter is more than target
    else
    {
        document.getElementById("counter2").textContent = (target/100+3.14).toFixed(2) + "%";
    }
    
}
// start the scripts when th page is loaded
window.onload = updateRate();
window.onload = updateGrads();

// controls popus with directions
function popUp()
{
    //variables for appropriate form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    // if nothing provided in email-notify the user to provide one
    if (email == "")
    {
        alert("Email is required");
    }
    // if email is proper-congratulate the user
    else if (email.includes("@gmail.com"))   
    {
        alert("Thank you, " + name + ". We will contact you shortly!");
    }
    // if user provided an email not from gmail- notify them
    else
    {
        alert("Please provide @gmail.com type of email adress");
    }
}
