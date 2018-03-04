const sanitiseString = (str) => str.trim().toLowerCase().replace(/[\s]/g, '-').replace(/[^a-zäöüß-]/g, '')

const personUrl = (person) => `${sanitiseString(person.firstName)}-${sanitiseString(person.surname)}`;

export default personUrl;