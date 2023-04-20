// SLIDENAV
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Icon animated
function iconanimated (x) {
    x.classList.toggle("change");
}
// SLIDENAV END

// SEARCH DROPDOWN
function myFunction() {
    document.getElementById("DropdownSrc").classList.toggle("show-src");
}

// SLIDENAV DROPDOWN
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    });
}
// SLIDENAV DROPDOWN END

// SLIDER ALL CONTENT
// Slider Card Update & Information
const cardContainer1 = document.querySelector('.card-container-uni');
const prevBtn1 = document.querySelector('.prev-btn-uni');
const nextBtn1 = document.querySelector('.next-btn-uni');

prevBtn1.addEventListener('click', () => {
    cardContainer1.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});

nextBtn1.addEventListener('click', () => {
    cardContainer1.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});


// Slider Card Server Feature
const cardContainer2 = document.querySelector('.card-container-sf');
const prevBtn2 = document.querySelector('.prev-btn-sf');
const nextBtn2 = document.querySelector('.next-btn-sf');

let isDown = false;
let startX;
let scrollLeft;

cardContainer2.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - cardContainer2.offsetLeft;
    scrollLeft = cardContainer2.scrollLeft;
});

cardContainer2.addEventListener('mouseleave', () => {
    isDown = false;
});

cardContainer2.addEventListener('mouseup', () => {
    isDown = false;
});

cardContainer2.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardContainer2.offsetLeft;
    const walk = (x - startX) * 3; // nilai pergerakan slider bisa disesuaikan
    cardContainer2.scrollLeft = scrollLeft - walk;
});

prevBtn2.addEventListener('click', () => {
    cardContainer2.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});

nextBtn2.addEventListener('click', () => {
    cardContainer2.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});

// Slider Card Staff List
const cardContainer3 = document.querySelector('.card-container-sl');
const prevBtn3 = document.querySelector('.prev-btn-sl');
const nextBtn3 = document.querySelector('.next-btn-sl');

let isDown3 = false;
let startX3;
let scrollLeft3;

cardContainer3.addEventListener('mousedown', (e) => {
    isDown3 = true;
    startX3 = e.pageX - cardContainer3.offsetLeft;
    scrollLeft3 = cardContainer3.scrollLeft;
});

cardContainer3.addEventListener('mouseleave', () => {
    isDown3 = false;
});

cardContainer3.addEventListener('mouseup', () => {
    isDown3 = false;
});

cardContainer3.addEventListener('mousemove', (e) => {
    if (!isDown3) return;
    e.preventDefault();
    const x = e.pageX - cardContainer3.offsetLeft;
    const walk = (x - startX3) * 3; // nilai pergerakan slider bisa disesuaikan
    cardContainer3.scrollLeft = scrollLeft3 - walk;
});

prevBtn3.addEventListener('click', () => {
    cardContainer3.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});

nextBtn3.addEventListener('click', () => {
    cardContainer3.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});
// SLIDER ALL CONTENT END

// SEARCH HUGO
var summaryInclude = 180;
var fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    includeScore: true,
    tokenize: true,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
        {name: "title", weight: 0.45},
        {name: "contents", weight: 0.4},
        {name: "tags", weight: 0.1},
        {name: "categories", weight: 0.05}
    ]
};

// =============================
// Search
// =============================

var inputBox = document.getElementById('search-query');
if (inputBox !== null) {
    var searchQuery = param("q");
    if (searchQuery) {
        inputBox.value = searchQuery || "";
        executeSearch(searchQuery, false);
    } else {
        document.getElementById('search-results').innerHTML = '<p class="search-results-empty">Please enter a word or phrase above, or see <a href="/tags/">all tags</a>.</p>';
    }
}

function executeSearch(searchQuery) {

    show(document.querySelector('.search-loading'));

    fetch('/index.json').then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        // Examine the text in the response
        response.json().then(function (pages) {
            var fuse = new Fuse(pages, fuseOptions);
            var result = fuse.search(searchQuery);
            if (result.length > 0) {
                populateResults(result);
            } else {
                document.getElementById('search-results').innerHTML = '<p class=\"search-results-empty\">No matches found</p>';
            }
            hide(document.querySelector('.search-loading'));
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    });
}

function populateResults(results) {

    var searchQuery = document.getElementById("search-query").value;
    var searchResults = document.getElementById("search-results");

    // pull template from hugo template definition
    var templateDefinition = document.getElementById("search-result-template").innerHTML;

    results.forEach(function (value, key) {

        var contents = value.item.contents;
        var snippet = "";
        var snippetHighlights = [];

        snippetHighlights.push(searchQuery);
        snippet = contents.substring(0, summaryInclude * 2) + '&hellip;';

        //replace values
        var tags = ""
        if (value.item.tags) {
            value.item.tags.forEach(function (element) {
                tags = tags + "<a href='/tags/" + element + "'>" + "#" + element + "</a> "
            });
        }

        var output = render(templateDefinition, {
            key: key,
            title: value.item.title,
            link: value.item.permalink,
            tags: tags,
            categories: value.item.categories,
            snippet: snippet
        });
        searchResults.innerHTML += output;

        snippetHighlights.forEach(function (snipvalue, snipkey) {
            var instance = new Mark(document.getElementById('summary-' + key));
            instance.mark(snipvalue);
        });

    });
}

function render(templateString, data) {
    var conditionalMatches, conditionalPattern, copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
            //valid key, remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
            //not valid, remove entire section
            copy = copy.replace(conditionalMatches[0], '');
        }
    }
    templateString = copy;
    //now any conditionals removed we can do simple substitution
    var key, find, re;
    for (key in data) {
        find = '\\$\\{\\s*' + key + '\\s*\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}

// Helper Functions
function show(elem) {
    elem.style.display = 'block';
}
function hide(elem) {
    elem.style.display = 'none';
}
function param(name) {
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}
// SEARCH HUGO END