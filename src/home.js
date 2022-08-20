const homeContainer = document.createElement('div');
const splashContainer = document.createElement('div');
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
const testimonialOne = document.createElement('p');
const testimonialTwo = document.createElement('p');

homeContainer.append(splashContainer, informationContainer);
splashContainer.append(splashTitle, splashSubtitle, splashBtnMenu);
informationContainer.append(hoursContainer, locationContainer, testimonialContainer);
hoursContainer.append(hoursTitle, hoursList);
locationContainer.append(locationTitle, locationContent);
testimonialContainer.append(testimonialTitle, testimonialOne, testimonialTwo)

splashContainer.id = 'splash-container';

splashTitle.textContent = 'Mmmm... *Drool*';
splashSubtitle.textContent = 'Come on in for mouth-wateringly delicious comfort food'

hoursTitle.textContent = 'Hours';
locationTitle.textContent = 'Location';
testimonialTitle.textContent = 'Testimonials';

informationContainer.id = 'information-container';
homeContainer.id = 'home-container';
locationContainer.id = 'location-container';
testimonialContainer.id = 'testimonials-container';

let hoursListItems = [
    'monday-hours',
    'tuesday-hours',
    'wednesday-hours',
    'thursday-hours',
    'friday-hours',
    'saturday-hours',
    'sunday-hours'
];

hoursListItems.forEach(day => {
    let dayItem = document.createElement('li');
    dayItem.id = day;
    dayItem.className = 'day-list-item';
    hoursList.append(dayItem);
});

hoursList.querySelector('#monday-hours').textContent = 'Monday: 12PM - 10PM';
hoursList.querySelector('#tuesday-hours').textContent = 'Tuesday: 12PM - 10PM';
hoursList.querySelector('#wednesday-hours').textContent = 'Wednesday: 12PM - 10PM';
hoursList.querySelector('#thursday-hours').textContent = 'Thursday: 12PM - 10PM';
hoursList.querySelector('#friday-hours').textContent = 'Friday: 12PM - 10PM';
hoursList.querySelector('#saturday-hours').textContent = 'Saturday: 4PM - 10PM';
hoursList.querySelector('#sunday-hours').textContent = 'Sunday: 4PM - 10PM';

locationContent.textContent = "123 Wimby St. Toronto";

testimonialOne.textContent = "My face exploded! 5/5"
testimonialTwo.textContent = "I spent the next day in the bathroom, and the next week in the hospital.";

export default homeContainer;