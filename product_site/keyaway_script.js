/*
    Name: Korinne Toliver
    Date: 12/14/2025
    Description: JavaScript for Key Away with Movie objects
    AI help: Used Claude for constructor notation and object methods
*/

// ===== MOVIE OBJECT CONSTRUCTOR =====
// Constructor for Movie objects
class Movie {
    constructor(title, director, year, runtime, rating) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.runtime = runtime;
        this.rating = rating;
    }
    
    // Method: returns formatted movie information
    getInfo() {
        return `${this.title} (${this.year}) directed by ${this.director}. Runtime: ${this.runtime} min. Rating: ${this.rating}/10`;
    }
    
    // Method: checks if movie is long (over 2 hours)
    isLongMovie() {
        return this.runtime > 120;
    }
    
    // Method: returns rating category
    getRatingLevel() {
        if (this.rating >= 7.0) {
            return "high";
        } else if (this.rating >= 6.0) {
            return "medium";
        } else {
            return "low";
        }
    }
}


// ===== CREATE MOVIE INSTANCES =====
// Create three movie objects for the French films
const movie1 = new Movie("Gemma Bovery", "Anne Fontaine", 2014, 99, 6.4);
const movie2 = new Movie("Young & Beautiful", "François Ozon", 2013, 95, 6.7);
const movie3 = new Movie("Last Summer", "Catherine Breillat", 2021, 104, 5.6);


// ===== DISPLAY MOVIE INFORMATION =====
// Function to display movie objects on the page
function displayMovieInfo() {
    const infoContainer = document.getElementById('movie-info-display');
    
    if (!infoContainer) return;
    
    // Access properties and methods from movie objects
    let html = '<div class="movie-objects-list">';
    
    // Movie 1 info
    html += '<div class="movie-object-card">';
    html += `<h3>${movie1.title}</h3>`;
    html += `<p><strong>Director:</strong> ${movie1.director}</p>`;
    html += `<p><strong>Year:</strong> ${movie1.year}</p>`;
    html += `<p><strong>Runtime:</strong> ${movie1.runtime} minutes</p>`;
    html += `<p><strong>Rating:</strong> ${movie1.rating}/10 (${movie1.getRatingLevel()})</p>`;
    html += `<p><strong>Long movie?</strong> ${movie1.isLongMovie() ? 'Yes' : 'No'}</p>`;
    html += '</div>';
    
    // Movie 2 info
    html += '<div class="movie-object-card">';
    html += `<h3>${movie2.title}</h3>`;
    html += `<p><strong>Director:</strong> ${movie2.director}</p>`;
    html += `<p><strong>Year:</strong> ${movie2.year}</p>`;
    html += `<p><strong>Runtime:</strong> ${movie2.runtime} minutes</p>`;
    html += `<p><strong>Rating:</strong> ${movie2.rating}/10 (${movie2.getRatingLevel()})</p>`;
    html += `<p><strong>Long movie?</strong> ${movie2.isLongMovie() ? 'Yes' : 'No'}</p>`;
    html += '</div>';
    
    // Movie 3 info
    html += '<div class="movie-object-card">';
    html += `<h3>${movie3.title}</h3>`;
    html += `<p><strong>Director:</strong> ${movie3.director}</p>`;
    html += `<p><strong>Year:</strong> ${movie3.year}</p>`;
    html += `<p><strong>Runtime:</strong> ${movie3.runtime} minutes</p>`;
    html += `<p><strong>Rating:</strong> ${movie3.rating}/10 (${movie3.getRatingLevel()})</p>`;
    html += `<p><strong>Long movie?</strong> ${movie3.isLongMovie() ? 'Yes' : 'No'}</p>`;
    html += '</div>';
    
    html += '</div>';
    
    infoContainer.innerHTML = html;
    
    // Log to console
    console.log("Movie 1:", movie1.getInfo());
    console.log("Movie 2:", movie2.getInfo());
    console.log("Movie 3:", movie3.getInfo());
}


// ===== EVENT HANDLING FUNCTIONS =====

function handleMovieClick(event) {
    const clickedCard = event.currentTarget;
    const titleElement = clickedCard.querySelector('.movie-title');
    const movieTitle = titleElement ? titleElement.textContent : 'this movie';
    
    const allCards = document.querySelectorAll('.movie-card');
    allCards.forEach(card => card.classList.remove('selected'));
    
    clickedCard.classList.add('selected');
    
    const messageArea = document.getElementById('selection-message');
    if (messageArea) {
        messageArea.innerHTML = `You selected <strong>${movieTitle}</strong>`;
        messageArea.style.display = 'block';
    }
}

function showInputHelp(event) {
    const input = event.target;
    const helpId = input.id + '-help';
    const helpElement = document.getElementById(helpId);
    
    if (helpElement) {
        helpElement.style.display = 'block';
        helpElement.textContent = 'Please enter at least 3 characters';
        helpElement.style.color = '#667eea';
    }
}

function validateInput(event) {
    const input = event.target;
    const value = input.value.trim();
    const helpId = input.id + '-help';
    const helpElement = document.getElementById(helpId);
    
    if (!helpElement) return;
    
    if (value === '' || value.length < 3) {
        helpElement.textContent = 'Error: Please enter at least 3 characters';
        helpElement.style.color = '#ff6b6b';
        helpElement.style.display = 'block';
        input.style.borderColor = '#ff6b6b';
    } else {
        helpElement.style.display = 'none';
        input.style.borderColor = '#667eea';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const successMessage = document.getElementById('form-success');
    
    if (successMessage) {
        successMessage.innerHTML = '<strong>Success!</strong> Your search preferences have been recorded.';
        successMessage.style.display = 'block';
        successMessage.style.padding = '1rem';
        successMessage.style.background = 'rgba(102, 126, 234, 0.2)';
        successMessage.style.borderRadius = '8px';
        successMessage.style.marginTop = '1rem';
    }
}


// ===== PREVIOUS FUNCTIONS =====

function displayWelcome() {
    console.log("Welcome to Key Away!");
}

function validateSelection(checkbox1, checkbox2, checkbox3) {
    if (checkbox1 && checkbox1.checked) return true;
    if (checkbox2 && checkbox2.checked) return true;
    if (checkbox3 && checkbox3.checked) return true;
    return false;
}

function addRuntimes(runtime1, runtime2, runtime3, checked1, checked2, checked3) {
    let total = 0;
    if (checked1) total += runtime1;
    if (checked2) total += runtime2;
    if (checked3) total += runtime3;
    return total;
}

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

function calculateWatchTime() {
    const checkbox1 = document.getElementById('movie1-check');
    const checkbox2 = document.getElementById('movie2-check');
    const checkbox3 = document.getElementById('movie3-check');
    
    const movieCards = document.getElementsByClassName('movie-card');
    const allInputs = document.getElementsByTagName('input');
    const resultArea = document.querySelector('#watch-time-result');
    
    if (!validateSelection(checkbox1, checkbox2, checkbox3)) {
        resultArea.textContent = "Please select at least one movie";
        return;
    }
    
    let count = 0;
    if (checkbox1.checked) count++;
    if (checkbox2.checked) count++;
    if (checkbox3.checked) count++;
    
    // Use movie object runtimes
    const totalMinutes = addRuntimes(
        movie1.runtime, movie2.runtime, movie3.runtime,
        checkbox1.checked, checkbox2.checked, checkbox3.checked
    );
    
    const timeString = formatTime(totalMinutes);
    
    let message = "You selected " + count;
    message += (count === 1) ? " movie<br>" : " movies<br>";
    message += "Total Watch Time: <strong>" + timeString + "</strong>";
    
    resultArea.innerHTML = message;
}

function recommendSearchMethod() {
    const knowsMood = confirm("Do you know what mood you're in?");
    
    if (!knowsMood) {
        alert("Browse Trending Movies");
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

function countSearches() {
    let count = 0;
    
    while (count <= 1247) {
        console.log("Count: " + count);
        count += 200;
    }
}

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


// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    displayWelcome();
    
    // Display movie objects information
    displayMovieInfo();
    
    showStats();
    countSearches();
    
    fixMovieCards();
    fixNav();
    fixReviews();
    
    const calcButton = document.querySelector('#calc-watch-time');
    if (calcButton) {
        calcButton.addEventListener('click', calculateWatchTime);
    }
    
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', handleMovieClick);
    });
    
    const keywordsInput = document.getElementById('keywords');
    if (keywordsInput) {
        keywordsInput.addEventListener('focus', showInputHelp);
        keywordsInput.addEventListener('blur', validateInput);
    }
    
    const searchForm = document.querySelector('.form-section form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleFormSubmit);
    }
    
    document.body.addEventListener('click', function() {
        recommendSearchMethod();
    }, { once: true });
});