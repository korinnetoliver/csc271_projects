/*
    Name: Korinne Toliver
    Date: 12/14/2025
    Description: JavaScript for Key Away with modular functions
    AI help: Used Claude for function organization
*/

// movie data
const movie1Name = "Gemma Bovery";
const movie1Runtime = 99;
const movie2Name = "Young & Beautiful";
const movie2Runtime = 95;
const movie3Name = "Last Summer";
const movie3Runtime = 104;


// BASIC FUNCTION - no parameters, no return
// shows welcome message when page loads
function displayWelcome() {
    console.log("Welcome to Key Away!");
}


// FUNCTION WITH PARAMETERS
// checks if at least one checkbox is selected
// returns true or false
function validateSelection(checkbox1, checkbox2, checkbox3) {
    if (checkbox1 && checkbox1.checked) return true;
    if (checkbox2 && checkbox2.checked) return true;
    if (checkbox3 && checkbox3.checked) return true;
    return false;
}


// FUNCTION WITH MULTIPLE PARAMETERS
// adds up runtimes for checked movies
// returns total minutes
function addRuntimes(runtime1, runtime2, runtime3, checked1, checked2, checked3) {
    let total = 0;
    if (checked1) total += runtime1;
    if (checked2) total += runtime2;
    if (checked3) total += runtime3;
    return total;
}


// FUNCTION THAT RETURNS A VALUE
// converts minutes to "2 hours and 30 minutes" format
function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    let result = "";
    
    if (hours > 0) {
        result += hours;
        result += (hours === 1) ? " hour" : " hours";
    }
    
    if (hours > 0 && minutes > 0) {
        result += " and ";
    }
    
    if (minutes > 0 || hours === 0) {
        result += minutes + " minutes";
    }
    
    return result;
}


// main calculator function - now much shorter
function calculateWatchTime() {
    // get checkboxes
    const checkbox1 = document.getElementById('movie1-check');
    const checkbox2 = document.getElementById('movie2-check');
    const checkbox3 = document.getElementById('movie3-check');
    
    // use other DOM methods for requirements
    const movieCards = document.getElementsByClassName('movie-card');
    const allInputs = document.getElementsByTagName('input');
    const resultArea = document.querySelector('#watch-time-result');
    
    // validate using our function
    if (!validateSelection(checkbox1, checkbox2, checkbox3)) {
        resultArea.textContent = "Please select at least one movie";
        return;
    }
    
    // count selected
    let count = 0;
    if (checkbox1.checked) count++;
    if (checkbox2.checked) count++;
    if (checkbox3.checked) count++;
    
    // calculate total using our function
    const totalMinutes = addRuntimes(
        movie1Runtime, movie2Runtime, movie3Runtime,
        checkbox1.checked, checkbox2.checked, checkbox3.checked
    );
    
    // format time using our function
    const timeString = formatTime(totalMinutes);
    
    // build message
    let message = "You selected " + count;
    message += (count === 1) ? " movie<br>" : " movies<br>";
    message += "Total Watch Time: <strong>" + timeString + "</strong>";
    
    // display with innerHTML
    resultArea.innerHTML = message;
}


// decision tree
function recommendSearchMethod() {
    const knowsMood = confirm("Do you know what mood you're in?");
    
    if (!knowsMood) {
        alert("Browse Trending Movies - check out our trending selections!");
        return;
    }
    
    const hasTimePeriod = confirm("Do you have a specific time period in mind?");
    
    if (!hasTimePeriod) {
        alert("Search by Mood Keywords Only");
        return;
    }
    
    const hasLanguage = confirm("Looking for a specific language or region?");
    
    if (hasLanguage) {
        alert("Search by Mood + Era + Language/Region");
    } else {
        alert("Search by Mood + Era");
    }
}


// for loop
function showStats() {
    const stats = [
        { name: "Total Users", num: 1247 },
        { name: "Accuracy", num: "94%" },
        { name: "Movies", num: "10000+" }
    ];
    
    for (let i = 0; i < stats.length; i++) {
        console.log(stats[i].name + ": " + stats[i].num);
    }
}


// while loop
function countSearches() {
    let count = 0;
    
    while (count <= 1247) {
        console.log("Count: " + count);
        count += 200;
    }
}


// nodelist - movie cards
function fixMovieCards() {
    const cards = document.querySelectorAll('.movie-card');
    
    if (cards.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('enhanced');
            
            cards[i].addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            cards[i].addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    }
}


// nodelist - navigation
function fixNav() {
    const links = document.querySelectorAll('.nav-link');
    
    if (links.length > 0) {
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                for (let j = 0; j < links.length; j++) {
                    links[j].classList.remove('active');
                }
                this.classList.add('active');
            });
        }
    }
}


// nodelist - reviews
function fixReviews() {
    const reviews = document.querySelectorAll('.review-card');
    
    if (reviews.length > 0) {
        for (let i = 0; i < reviews.length; i++) {
            if (i % 2 === 0) {
                reviews[i].style.borderLeft = '4px solid #667eea';
            } else {
                reviews[i].style.borderLeft = '4px solid #764ba2';
            }
        }
    }
}


// initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayWelcome();
    
    showStats();
    countSearches();
    
    fixMovieCards();
    fixNav();
    fixReviews();
    
    const calcButton = document.querySelector('#calc-watch-time');
    if (calcButton) {
        calcButton.addEventListener('click', calculateWatchTime);
    }
    
    document.body.addEventListener('click', function() {
        recommendSearchMethod();
    }, { once: true });
});