/*
    Name: Korinne Toliver
    Date: 12/14/2025
    Description: JavaScript for Key Away - decision tree, loops, and watch time calculator
    AI help: Used Claude to help debug some of the logic and learn about NodeLists
*/

// ===== PART 1: DECISION TREE =====
function recommendSearchMethod() {
    const knowsMood = confirm("Do you know what mood you're in?");
    
    let result = "";
    
    if (!knowsMood) {
        result = "Browse Trending Movies";
        alert("Try browsing our trending movies since you're not sure what mood you're in!");
    } 
    else {
        const hasTimePeriod = confirm("Do you have a specific time period in mind?");
        
        if (knowsMood && !hasTimePeriod) {
            result = "Search by Mood Keywords Only";
            alert("Search using mood keywords like romantic or thrilling");
        }
        else if (knowsMood && hasTimePeriod) {
            const hasLanguage = confirm("Looking for a specific language or region?");
            
            if (knowsMood && hasTimePeriod && hasLanguage) {
                result = "Search by Mood + Era + Language/Region";
                alert("Use all three filters for specific results");
            }
            else {
                result = "Search by Mood + Era";
                alert("Search by mood and era together");
            }
        }
    }
    
    console.log("Recommendation: " + result);
    return result;
}


// ===== PART 2: FOR LOOP =====
function showStats() {
    const stats = [
        { name: "Total Users", num: 1247 },
        { name: "Accuracy", num: "94%" },
        { name: "Avg Rating", num: "4.8" },
        { name: "Movies", num: "10000+" },
        { name: "Languages", num: 25 }
    ];
    
    console.log("Key Away Stats:");
    
    for (let i = 0; i < stats.length; i++) {
        console.log(stats[i].name + ": " + stats[i].num);
    }
}


// ===== PART 3: WHILE LOOP =====
function countSearches() {
    const total = 1247;
    let count = 0;
    
    console.log("Counting searches:");
    
    while (count <= total) {
        console.log("Count: " + count);
        count += 200;
    }
    
    console.log("Final total: " + total);
}


// ===== PART 4: NODELIST - MOVIE CARDS =====
function fixMovieCards() {
    const cards = document.querySelectorAll('.movie-card');
    
    if (cards.length > 0) {
        console.log("Found " + cards.length + " movie cards");
        
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('enhanced');
            cards[i].setAttribute('data-number', i + 1);
            
            cards[i].addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            cards[i].addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    } else {
        console.log("no cards found");
    }
}


// ===== PART 5: NODELIST - NAVIGATION =====
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


// ===== PART 6: NODELIST - REVIEW CARDS =====
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


// ===== PART 7: WATCH TIME CALCULATOR =====
// Movie data variables
const movie1Name = "Gemma Bovery";
const movie1Runtime = 99;

const movie2Name = "Young & Beautiful";
const movie2Runtime = 95;

const movie3Name = "Last Summer";
const movie3Runtime = 104;


function calculateWatchTime() {
    // Use getElementById to select checkboxes
    const checkbox1 = document.getElementById('movie1-check');
    const checkbox2 = document.getElementById('movie2-check');
    const checkbox3 = document.getElementById('movie3-check');
    
    // Use getElementsByClassName
    const movieCards = document.getElementsByClassName('movie-card');
    
    // Use getElementsByTagName
    const allInputs = document.getElementsByTagName('input');
    
    // Use querySelector
    const resultArea = document.querySelector('#watch-time-result');
    
    // Initialize variables
    let totalMinutes = 0;
    let movieCount = 0;
    
    // Check selections and add runtimes
    if (checkbox1 && checkbox1.checked) {
        totalMinutes += movie1Runtime;
        movieCount++;
    }
    
    if (checkbox2 && checkbox2.checked) {
        totalMinutes += movie2Runtime;
        movieCount++;
    }
    
    if (checkbox3 && checkbox3.checked) {
        totalMinutes += movie3Runtime;
        movieCount++;
    }
    
    // Check if any selected
    if (movieCount === 0) {
        // Use textContent
        resultArea.textContent = "Please select at least one movie to calculate watch time.";
        return;
    }
    
    // Calculate hours and minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    // Build message
    let message = "You selected " + movieCount;
    
    if (movieCount === 1) {
        message += " movie<br>";
    } else {
        message += " movies<br>";
    }
    
    message += "Total Watch Time: ";
    
    if (hours > 0) {
        message += hours;
        if (hours === 1) {
            message += " hour";
        } else {
            message += " hours";
        }
    }
    
    if (hours > 0 && minutes > 0) {
        message += " and ";
    }
    
    if (minutes > 0 || hours === 0) {
        message += minutes + " minutes";
    }
    
    // Use innerHTML to display formatted result
    resultArea.innerHTML = "<strong>" + message + "</strong>";
    
    console.log("Calculated: " + totalMinutes + " minutes total");
}


// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');
    
    // Run loops
    showStats();
    countSearches();
    
    // Enhance elements
    fixMovieCards();
    fixNav();
    fixReviews();
    
    // Set up calculator button
    const calcButton = document.querySelector('#calc-watch-time');
    if (calcButton) {
        calcButton.addEventListener('click', calculateWatchTime);
    }
    
    // Click anywhere to run decision tree (once)
    document.body.addEventListener('click', function() {
        recommendSearchMethod();
    }, { once: true });
});