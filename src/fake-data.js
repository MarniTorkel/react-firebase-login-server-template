const GROUP_ID_1 = '1234';
const GROUP_ID_2 = '2345';
const GROUP_ID_3 = '3456';

const USER_ID_1 = 'mGYQNJc0A4SvUiqDUsnT9XKGLi43';
const USER_ID_2 = '8eZcJdUV1WVXoEdywnwhIGvwrQ03';
const USER_ID_3 = 'QU8XivtTbjggooHjhskIDXfouUH3';

module.exports.users = [{
    id: USER_ID_1,
    email: 'vhugo@gmail.com',
    fullName: 'Victor Hugo',
}, {
    id: USER_ID_2,
    email: 'jsmith@gmail.com',
    fullName: 'John Smith',
}, {
    id: USER_ID_3,
    email: 'hjones@gmail.com',
    fullName: 'Hannah Jones',
}];

module.exports.photos = [{
    url: '/cat-photo.jpeg',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: '/car-photo.jpg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}];
