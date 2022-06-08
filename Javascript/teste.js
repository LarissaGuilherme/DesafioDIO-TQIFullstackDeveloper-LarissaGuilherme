/* //var y =0; estudar estrutura de dados
var desconto = 0.2;
const PRECO = 2;
var total = PRECO-desconto;

function Soma(a,b){
    return a +b;//para quando vc vai usar o valor em outra função
    console.log(a + b); //quando vc só quer ver o resultado
}
Soma(3,5);//não esqueça de chamar a função */

/* console.log("Salve meu Bom!"); */

function returnEvenValues (array){
    let evenNums= [];
    for(let i = 0; i< array.length; i++){
        if (array [i] % 2 ===0) {
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par`);

        }
    }
    console.log('Os numeros pares sao:',evenNums);
}

//chamando a função:
let array=[1,2,4,5,7,8];

returnEvenValues(array);