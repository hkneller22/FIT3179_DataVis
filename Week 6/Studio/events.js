// Function declarations

function incrementCounter() // function called on button click
{
    var spanElement = document.getElementById('counter');
    var counterVar = spanElement.getAttribute('numberOfClicks');    // retrieve stuff

    counterVar++;   // increment click counter

    spanElement.innerText = counterVar; // set inner text to counter
    spanElement.setAttribute('numberOfClicks', counterVar); // save number of clicks to attribute

}


function toggleVisibility()
{
    var chartImage = document.getElementById('chart1');

    if (chartImage.style.display === 'none')
    {
        chartImage.style.display = 'block';
    }
    else    
    {
        chartImage.style.display = 'none'; 
    }
}

// Script calls
document.getElementById("incrementButton").addEventListener('click', incrementCounter); // call incrementCounter on incrementButton click
document.getElementById("chartToggle").addEventListener('click', toggleVisibility); 
