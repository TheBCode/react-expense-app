console.log('testing.')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self Made' } = book.publisher;

if (publisherName) {console.log(publisherName);}

