// require do arquivo
const ValidarNome = require("./nome")

// criar caso de teste 
test('Validação do nome com letras', ()=>{
    expect(ValidarNome("João")).toBe(true)
})

test('Validação do nome com letras e números', ()=>{
    expect(ValidarNome("J0ã0")).toBe(false)
})