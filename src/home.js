export const homeContainer = document.createElement('main');
const splashContainer = document.createElement('div');
const splashTitle = document.createElement('h2');
const splashSubtitle = document.createElement('p');
const splashBtnMenu = document.createElement('button');

const hoursContainer = document.createElement('div');
const locationContainer = document.createElement('div');
const testimonialContainer = document.createElement('div');
const informationContainer = document.createElement('div');

homeContainer.append(splashContainer, informationContainer);
splashContainer.append(splashTitle, splashSubtitle, splashBtnMenu);
informationContainer.append(hoursContainer, locationContainer, testimonialContainer);

splashContainer.id = 'splash-container';



// hours location testimonial