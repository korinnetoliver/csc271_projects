/*
    Name: Korinne Toliver
    Date: 12/14/2025
    Description: JavaScript for Key Away - decision tree and dynamic content
    AI help: Used Claude to help debug some of the logic and learn about NodeLists
*/

// Decision tree function based on my flowchart
function recommendSearchMethod() {
    // ask user the three questions
    const knowsMood = confirm("Do you know what mood you're in?");
    
    let result = "";
    
    // first decision - do they know their mood?
    if (!knowsMood) {
        result = "Browse Trending Movies";
        alert("Try browsing our trending movies since you're not sure what mood you're in!");
    } 
    else {
        // second question
        const hasTimePeriod = confirm("Do you have a specific time period in mind?");
        
        if (knowsMood && !hasTimePeriod) {
            result = "Search by Mood Keywords Only";
            alert("Search using mood keywords like romantic or thrilling");
        }
        else if (knowsMood && hasTimePeriod) {
            // third question
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


// FOR LOOP - display movie stats
// using for loop because i know how many stats there are
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


// WHILE LOOP - count searches
// using while loop to count up to total
function countSearches() {
    const total = 1247;
    let count = 0;
    
    console.log("Counting searches:");
    
    // count by 200s
    while (count <= total) {
        console.log("Count: " + count);
        count += 200;
    }
    
    console.log("Final total: " + total);
}


// NODELIST - enhance movie cards
// finds all movie cards and adds effects
function fixMovieCards() {
    const cards = document.querySelectorAll('.movie-card');
    
    // check if we found any cards
    if (cards.length > 0) {
        console.log("Found " + cards.length + " movie cards");
        
        // loop through each card
        for (let i = 0; i < cards.length; i++) {
            // add class
            cards[i].classList.add('enhanced');
            
            // add number
            cards[i].setAttribute('data-number', i + 1);
            
            // hover effect
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


// NODELIST - fix navigation
function fixNav() {
    const links = document.querySelectorAll('.nav-link');
    
    if (links.length > 0) {
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                // remove active from all
                for (let j = 0; j < links.length; j++) {
                    links[j].classList.remove('active');
                }
                // add to this one
                this.classList.add('active');
            });
        }
    }
}


// NODELIST - style review cards
function fixReviews() {
    const reviews = document.querySelectorAll('.review-card');
    
    if (reviews.length > 0) {
        for (let i = 0; i < reviews.length; i++) {
            // alternate colors
            if (i % 2 === 0) {
                reviews[i].style.borderLeft = '4px solid #667eea';
            } else {
                reviews[i].style.borderLeft = '4px solid #764ba2';
            }
        }
    }
}


// run everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');
    
    // run the loops
    showStats();
    countSearches();
    
    // enhance elements
    fixMovieCards();
    fixNav();
    fixReviews();
    
    // click to run decision tree
    document.body.addEventListener('click', function() {
        recommendSearchMethod();
    }, { once: true });
});