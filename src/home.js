const homeContainer = document.createElement('div');
const splashContainer = document.createElement('div');
const splashInfo = document.createElement('div');
const splashTitle = document.createElement('h2');
const splashSubtitle = document.createElement('p');
const splashBtnMenu = document.createElement('button');
const informationContainer = document.createElement('div');
const hoursContainer = document.createElement('div');
const hoursTitle = document.createElement('h3');
const hoursList = document.createElement('ul');
const locationContainer = document.createElement('div');
const locationTitle = document.createElement('h3');
const locationContent = document.createElement('p');
const testimonialContainer = document.createElement('div');
const testimonialTitle = document.createElement('h3');

homeContainer.append(splashContainer, informationContainer);
splashContainer.append(splashInfo);
splashInfo.append(splashTitle, splashSubtitle, splashBtnMenu);
informationContainer.append(
    hoursContainer,
    locationContainer,
    testimonialContainer
);
hoursContainer.append(hoursTitle, hoursList);
locationContainer.append(locationTitle, locationContent);
testimonialContainer.append(testimonialTitle);

splashContainer.id = 'splash-container';
splashInfo.id = 'splash-info';
splashBtnMenu.id = 'splash-btn-menu';
informationContainer.id = 'information-container';
homeContainer.id = 'home-container';

hoursContainer.className = 'grid-tile';
locationContainer.className = 'grid-tile';
testimonialContainer.className = 'grid-tile';

splashTitle.textContent = 'Hearty, satisfying, mouth-wateringly delicious.';
splashSubtitle.textContent =
    'Locally sourced, classic recipes. Come try our menu!';
splashBtnMenu.textContent = 'View our Menu';
hoursTitle.textContent = 'Hours';
locationTitle.textContent = 'Location';
testimonialTitle.textContent = 'Testimonials';
locationContent.textContent = '123 Wimby St., Toronto';

let testimonialList = [
    '"Excellent service, delicious food, and a relaxing atmosphere."',
    '"Great value and selection!"',
    '"Very satisfying meal, fantastic place."',
];

testimonialList.forEach((testimonial) => {
    const testimonialUList = document.createElement('ul');
    const testimonialItem = document.createElement('li');
    testimonialUList.id = 'testimonial-list';
    testimonialItem.textContent = testimonial;
    testimonialUList.append(testimonialItem);
    testimonialContainer.append(testimonialUList);
});

let hoursListItems = [
    'monday-hours',
    'tuesday-hours',
    'wednesday-hours',
    'thursday-hours',
    'friday-hours',
    'saturday-hours',
    'sunday-hours',
];

hoursListItems.forEach((day) => {
    let dayItem = document.createElement('li');
    dayItem.id = day;
    dayItem.className = 'day-list-item';
    hoursList.append(dayItem);
});

hoursList.querySelector('#monday-hours').textContent = 'Monday: 12PM - 10PM';
hoursList.querySelector('#tuesday-hours').textContent = 'Tuesday: 12PM - 10PM';
hoursList.querySelector('#wednesday-hours').textContent =
    'Wednesday: 12PM - 10PM';
hoursList.querySelector('#thursday-hours').textContent =
    'Thursday: 12PM - 10PM';
hoursList.querySelector('#friday-hours').textContent = 'Friday: 12PM - 10PM';
hoursList.querySelector('#saturday-hours').textContent = 'Saturday: 4PM - 10PM';
hoursList.querySelector('#sunday-hours').textContent = 'Sunday: 4PM - 10PM';

export default homeContainer;
