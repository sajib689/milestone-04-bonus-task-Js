const student = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movies',
    isSingle: true,
    friends: ['Apu', 'Raz', 'Salman'],
    movies: [
        {
            name: 'no 1',
            year: 2011,
        },
        {
            name: 'king khan',
            year: 2011,
        }
    ],
    act: function() {
        console.log('sakib khan')
    },
    car: {
        brand: 'tesla',
        price: 125800,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon mask',
            country: 'USA',
        }
    }
}

console.log(student.car.manufacturer)