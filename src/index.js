import { createHomepage } from './homepage.js';
import * as tabs from './tabs.js';

// initial load of website upon visit
(function () {
    createHomepage();
    tabs.createTabs();
})();


// event listener function for each tab

function addTabsListener() {
    // get nodelist of all buttons
    let buttons = document.querySelectorAll('button');

    // add event listener to each
    buttons.forEach(button => button.addEventListener('click', (e) => {

        // get text of button that was clicked
        let buttonText = e.target.textContent;

        // check which tab was clicked, and generate content for that tab
        if(buttonText === 'home') {
            generatePage(createHomepage());
        }
        else if(buttonText === 'menu') {
            generatePage(createMenu());
        }
        else {
            generatePage(createContact());
        };
    }));
}

// clear content from page
function clearpage() {
    let content = document.getElementById('content');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

// generate content for this specific page
function generatePage(pageFunction) {
    clearpage();
    pageFunction;
    tabs.createTabs();
    addTabsListener();
}