console.log('destructuring');

// Object Destructing

const person = {
    name: 'Itua',
    age: 35,
    location: {
        city: 'Lagos',
        temp: 103
    }
};

const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location;
if (city && temperature){
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// Array Destructuring

const address = ['km 46 Lekki epe express way', 'Sangotedo', 'Lagos', '239030'];
//const address = [];

const [, town, state = 'Edo'] = address;
console.log(`You are in ${address[1]}, ${address[2]}`);
console.log(`You are in ${town}, ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink,,cost] = item;
console.log(`A medium ${drink} costs ${cost}`);