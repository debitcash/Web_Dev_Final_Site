//Script used in newsevents.html
function dateCount()
{
    //variable to avoid infinite loops, updating loop will happend 1000 times
    var count=1000;
    function repeater()
    {
        // stores date of an event
        var date= new Date(document.getElementById("inpDate").textContent);
        // stores today's date
        var a = new Date();
        // difference between today and event's day
        var difference = date-a;
        // counting in seconds
        difference=difference/1000;
        // counting in hours
        difference= difference/3600;
        // 
        var hours= difference;
        // finding the whole value of days left
        var days= Math.floor(hours/24);
        // the remaining hours
        hours = hours - days * 24;
        // counting minutes and seconds left
        var minutes = (hours- Math.floor(hours))*60;
        var seconds = (minutes - Math.floor(minutes))*60;
        // decrease the loop counter
        count= count-1;
        // provide the string value to HTML
        document.getElementById("outD").textContent= 
        days + " days " + Math.floor(hours) + " hours " + Math.floor(minutes) + " minutes " + Math.floor(seconds) + " seconds" ;
        // repeat 1000 times
        if(count>0)
            {
                // update every 100 milliseconds, by recursively using repeater function
                setTimeout(repeater,1000);
            }  
    }
    repeater();
}
// run the script when page is loaded
window.onload = dateCount();
