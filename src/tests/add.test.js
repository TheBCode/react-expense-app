const add =(a,b) => a+b;
const generateName = (name = 'Anon') => `Hello ${name}!`;

test('should add two numbers', () => {
    expect(add(4,5)).toBe(9);
});

test('name should exist', ()=> {
    expect(generateName('Byron')).toBe('Hello Byron!');
})

test('name variable for no name', () => {
    expect(generateName()).toBe('Hello Anon!');
});
