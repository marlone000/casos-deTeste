function somar(a, b) {
    if (typeof a == 'string' && !isNaN(a)) {
        a = Number(a);
    }
    if (typeof b == 'string' && !isNaN(b)) {
        b = Number(b);
    }
    
    if ((typeof a !='number') || (typeof b != 'number')) {
        return "Caractere invalido";
    }
    
    return a + b;
}

module.exports = somar;

















//function somar (a, b){
  //  if((typeof a != 'number') || (typeof b != 'number')){
   //     return "Caractere invalido" 
    //}
  //      return a+b
//}
//module.exports = somar

//function somar(a, b) {
 //   if (typeof a !== 'number' || typeof b //!== 'number') {
 //     throw new Error(isNaN);
 //   }
 //   return a + b;
 // }
  
 // module.exports = somar;