import './style.css';
import homeContainer from './home.js';
import menuContainer from './menu.js';
import contactContainer from './contact.js';


const content = document.getElementById('content');
const mainContainer = document.createElement('main');
const header = document.createElement('header');
const logo = document.createElement('h1');
const navBar = document.createElement('nav');
const linkHome = document.createElement('a');
const linkMenu = document.createElement('a');
const linkContact = document.createElement('a');
const footer = document.createElement('footer');
const imageCredits = document.createElement('ul');
const pageCredits = document.createElement('p');

content.append(header, mainContainer, footer);
mainContainer.append(homeContainer);
header.append(logo);
header.append(navBar);
navBar.append(linkHome, linkMenu, linkContact);
footer.append(imageCredits, pageCredits);

logo.textContent = 'Comfort Food Eatery';

logo.id = 'logo';
navBar.id = 'top-navbar';
mainContainer.id = 'main-container'

linkHome.href = '#home';
linkHome.textContent = 'Home';
linkMenu.href = '#menu';
linkMenu.textContent = 'Menu';
linkContact.href = '#contact';
linkContact.textContent = 'Contact';

let imageCreditsList = [
    'Burger Photo by <a href="https://unsplash.com/es/@wondermario__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mario</a> on <a href="https://unsplash.com/s/photos/comfort-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Pancakes Photo by <a href="https://unsplash.com/es/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/comfort-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Pizza Photo by <a href="https://unsplash.com/es/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/comfort-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Mac and cheese Photo by <a href="https://unsplash.com/@tspoonphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tina Witherspoon</a> on <a href="https://unsplash.com/s/photos/comfort-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Cake Photo by <a href="https://unsplash.com/@davidholifield?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Holifield</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Home Page Burger Photo by <a href="https://unsplash.com/@desertroseco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aleisha Kalina</a> on <a href="https://unsplash.com/s/photos/bacon-cheeseburger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
];

for (let i = 0; i < imageCreditsList.length; i++)
{
    let imageCreditItem = document.createElement('li')
    imageCreditItem.innerHTML = imageCreditsList[i];
    imageCredits.append(imageCreditItem);
};

pageCredits.textContent = 'Project created by Derek for The Odin Project - Restaurant Page Project';

let navBarItems = Array.from(navBar.children);

navBarItems.forEach(item => {
    item.addEventListener('click', () => {
        changeTab(item);
})});

function changeTab(tab) {

    mainContainer.innerHTML = "";

    if (tab.getAttribute('href') === "#home") {
        mainContainer.append(homeContainer);
    }
    else if (tab.getAttribute('href') === '#menu') {
        mainContainer.append(menuContainer);
    }
    else if (tab.getAttribute('href') === '#contact') {
        mainContainer.append(contactContainer);
    }
}