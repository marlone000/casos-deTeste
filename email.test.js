// require do arquivo
const ValidarEmail = require("./email")

// criar caso de teste 

// foo.bar@gmail.com       	true 1
// foo.bar@gmail.com.br    	true 2
// foo.bar@gmail.com.br.br 	false 3
// foo.bar@gmail.          	false 4
// foo.bar@gmailcom        	false 5
// foo.bargmail.com        	false 6 
// @gmail.com               false 7

test('Validação do email', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com")).toBe(true)
  })

test('Validação do email', ()=>{
  expect(ValidarEmail("foo.bar@gmail.com.br")).toBe(true)
})

test('Validação do email', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false)
  })

  test('Validação do email', ()=>{
    expect(ValidarEmail("foo.bar@gmail.")).toBe(false)
  })   

  test('Validação do email', ()=>{
    expect(ValidarEmail("foo.bar@gmailcom")).toBe(false)
  })
  
  test('Validação do email', ()=>{
    expect(ValidarEmail("foo.bargmail.com")).toBe(false)
  })

test('Validação do email', ()=>{
    expect(ValidarEmail("@gmail.com")).toBe(false)
  })