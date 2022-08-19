const content = document.getElementById('content');

const header = document.createElement('header');
const logo = document.createElement('h1');
const navBar = document.createElement('nav');
const linkHome = document.createElement('a');
const linkMenu = document.createElement('a');
const linkContact = document.createElement('a');

content.append(header);
header.append(logo);
header.append(navBar);
navBar.append(linkHome, linkMenu, linkContact);

logo.textContent = 'Comfort Food Inc.';
logo.id = 'logo';

navBar.id = 'top-navbar';

linkHome.href = '#home';
linkHome.textContent = 'Home';
linkMenu.href = '#menu';
linkMenu.textContent = 'Menu';
linkContact.href = '#contact';
linkContact.textContent = 'Contact';


