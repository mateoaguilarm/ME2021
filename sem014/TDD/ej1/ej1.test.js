const { concat } = require('./ej1')

describe('concat text', () => {
    test('should concat two different strings', () => {
        const expected = 'Hola'
        const result = concat('Ho', 'la')

        expect(result).toBe(expected)
        
    })
    
})