const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'chessepuff.com',
    'disney.com',
    'dogpictures.com'
];

it('This is a silly test', () => {
    expect('hello').toBe('hello')
    googleSearch('testtest', dbMock)
})

it('it is searching Google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])

    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
})
