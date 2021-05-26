// Bloque de Tests los cuales pueden contener varios tests
describe('Sum test', () => {
    //test('la descripcion del test', ()=>{lo que se testea})
    test('should print a num', () => {
        // en este caso, Se espera un numero
        const expected = 'number';
        // El resultado
        const result = sum(5, 4);

        // 
        expect(expected).toBe(typeof result)
    })
    
})