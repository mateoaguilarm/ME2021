const { sum } = require('./operations');

// Bloque de Tests los cuales pueden contener varios tests
describe('Sum test', () => {
    //test('la descripcion del test', ()=>{lo que se testea})
    test('Should print a num', () => {
        // en este caso, Se espera un numero
        const expected = 'number';
        // El resultado
        const result = sum(5,5);
        // 
        expect(typeof result).toBe(expected)
        // hasta aca ya esta la primera parte del test
    })
    
})