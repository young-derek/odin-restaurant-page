const contactContainer = document.createElement('div');
const contactPageTitle = document.createElement('h2');
const contactGrid = document.createElement('div');

contactContainer.append(contactPageTitle, contactGrid);

contactContainer.id = 'contact-container';
contactPageTitle.id = 'contact-page-title';
contactGrid.id = 'contact-grid';

contactPageTitle.className = 'page-title';

contactPageTitle.textContent = 'Contact Us';

let contactList = [
    {
        name: 'McDoodle Realperson',
        jobTitle: 'Chef',
        phoneNumber: '345-675-3456',
        email: 'mcdoodle_r@fakemail.com',
    },
    {
        name: 'Tina Bobina',
        jobTitle: 'Waitress',
        phoneNumber: '875-653-7564',
        email: 'tina_b@fakemail.com',
    },
    {
        name: 'Looroy Jonkins',
        jobTitle: 'Manager',
        phoneNumber: '836-583-6836',
        email: 'looroy_j@fakemail.com',
    },
];

contactList.forEach((contact) => {
    const contactTile = document.createElement('div');
    const contactName = document.createElement('p');
    const contactJobTitle = document.createElement('p');
    const contactPhoneNumber = document.createElement('p');
    const contactEmail = document.createElement('p');

    contactTile.append(
        contactName,
        contactJobTitle,
        contactPhoneNumber,
        contactEmail
    );

    contactTile.className = 'contact-item grid-tile';

    contactName.textContent = contact.name;
    contactJobTitle.textContent = contact.jobTitle;
    contactPhoneNumber.textContent = contact.phoneNumber;
    contactEmail.textContent = contact.email;

    contactGrid.append(contactTile);
});

export default contactContainer;
