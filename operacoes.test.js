const somar = require('./operacoes');

test('adicionar 3 + 5 igual a 8', () => {
    expect(somar(3, 5)).toBe(8);
})