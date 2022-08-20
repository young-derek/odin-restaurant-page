import Pancakes from './images/chad-montano-eeqbbemH9-c-unsplash.jpg';
import Pizza from './images/chad-montano-MqT0asuoIcU-unsplash.jpg';
import BaconCheeseBurger from './images/mario--s27nY8mZUE-unsplash.jpg';
import MacAndCheese from './images/tina-witherspoon-A8Gze997X-E-unsplash.jpg';
import ChocolateCake from './images/david-holifield-kPxsqUGneXQ-unsplash.jpg';

const menuContainer = document.createElement('div');
const menuPageTitle = document.createElement('h2');
const menuGrid = document.createElement('div');

menuContainer.append(menuPageTitle, menuGrid);

menuContainer.id = 'menu-container';
menuPageTitle.id = 'menu-page-title';
menuGrid.id = 'menu-grid';

menuPageTitle.textContent = 'Menu';

menuPageTitle.className = 'page-title';

const menuItems = [
    {
        image: Pancakes,
        title: 'Stack of pancakes',
        description: 'A heaping stack of sweet, satisfying pancakes.',
        price: '12',
    },
    {
        image: Pizza,
        title: 'Chicken & Pineapple Pizza',
        description: 'Savoury grilled chicken and sweet tangy pineapple pizza.',
        price: '14',
    },
    {
        image: BaconCheeseBurger,
        title: 'Bacon Cheeseburger',
        description:
            "A comfort foodie's favourite, a whopping bacon cheeseburger.",
        price: '11',
    },
    {
        image: MacAndCheese,
        title: 'Mac & Cheese',
        description: 'Simple, classic and delicious Macaroni & Cheese.',
        price: '8',
    },
    {
        image: ChocolateCake,
        title: 'Chocolate Cake',
        description: 'Indulge yourself with this freshly baked chocolate cake.',
        price: '15',
    },
];

menuItems.forEach((menuItem) => {
    const menuItemTile = document.createElement('div');
    const menuItemImage = document.createElement('img');
    const menuItemTitle = document.createElement('h3');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice = document.createElement('p');

    menuItemImage.src = menuItem.image;
    menuItemTitle.textContent = menuItem.title;
    menuItemDescription.textContent = menuItem.description;
    menuItemPrice.textContent = `$${menuItem.price}`;

    menuItemTile.classList = 'menu-item grid-tile';

    menuItemTile.append(
        menuItemTitle,
        menuItemDescription,
        menuItemPrice,
        menuItemImage
    );

    menuGrid.append(menuItemTile);
});

export default menuContainer;
