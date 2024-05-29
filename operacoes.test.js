const somar = require('./operacoes');

test('adicionar 3 + 5 igual a 8', /*isso é uma fumção anonima*/() => {
    expect(somar(3, 5)).toBe(8);
})

test('Soma de dois números inteiros, 3 + 5 = 8', () => {
    expect(somar (3,5)).toBe(8)
})