
// BURGER MENU

// Selection of HTML objects
const burger = document.querySelector('.hamburgerMenu i');
const nav = document.querySelector('.linksAndCta');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav_active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
    console.log("works");
});
 

// TOGGLE HOME PAGE SECTION

// Identify "newest" article button
// Identify the hidden articles 
// create function to Change the page to display the new articles 
// create function to add underline to "newest"
// create function to remove underline to "trending"
// Add click event to call functions

// Selection of HTML objects
let articleTrendingColumn = document.querySelector('#columnLeftArticles');
let articleNewestColumn = document.querySelector('#articleCardsColumnNewest');
let articleToggleButtonRight = document.querySelector('#newest');
let articleToggleButtonLeft = document.querySelector('#trending');


// functions for newest articles
function toggleArticlesRight(e){
    e.preventDefault();
    console.log("Thisworks");
    articleTrendingColumn.classList.add('displayNone');
    articleNewestColumn.classList.remove('displayNone');
    console.log("This works 1");
    articleToggleButtonRight.classList.add('navActive');
    console.log("This works 2");
    articleToggleButtonLeft.classList.remove('navActive');
    console.log("This works 3");
}

// Calling the function after click event occurs

articleToggleButtonRight.addEventListener('click', toggleArticlesRight);

// functions for trending articles
function toggleArticlesLeft(e){
    e.preventDefault();
    console.log("Thisworks");
    articleNewestColumn.classList.add('displayNone');
    articleTrendingColumn.classList.remove('displayNone');
    console.log("This works 1");
    articleToggleButtonRight.classList.remove('navActive');
    console.log("This works 2");
    articleToggleButtonLeft.classList.add('navActive');
    console.log("This works 3");
}

// Calling the function after click event occurs

articleToggleButtonLeft.addEventListener('click', toggleArticlesLeft);

// Identify "trending" article button
// Identify the hidden articles 
// create function to Change the page to display the new articles 
// create function to add underline to "newest"
// create function to remove underline to "trending"
// Add click event to call functions

// Selection of HTML objects


//

// Calling the function after click event occurs







//Record dissapear

//Record1
let record1 = document.querySelector('#vinyl1')

function recordPop1(){
    record1.classList.add('recorddissapear')
    console.log("record pop works")
}

record1.addEventListener('click', recordPop1);

//Record2
let record2 = document.querySelector('#vinyl2')

function recordPop2(){
    record2.classList.add('recorddissapear')
    console.log("record pop works")
}

record2.addEventListener('click', recordPop2);

//Record3
let record3 = document.querySelector('#vinyl3')

function recordPop3(){
    record3.classList.add('recorddissapear')
    console.log("record pop works")
}

record3.addEventListener('click', recordPop3);

//Record4
let record4 = document.querySelector('#vinyl4')

function recordPop4(){
    record4.classList.add('recorddissapear')
    console.log("record pop works")
}

record4.addEventListener('click', recordPop4);

//Record5

let record5 = document.querySelector('#vinyl5')

function recordPop5(){
    record5.classList.add('recorddissapear')
    console.log("record pop2 works")
}

record5.addEventListener('click', recordPop5);
