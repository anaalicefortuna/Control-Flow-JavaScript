const idadeN = prompt('Digite sua idade: ');
const idade = Number(idadeN);
const idadeString = String(idade)
const idadeString2 = idade + ''; 


if (idade >= 18) {
    document.write ('Adulto ');
} else if (idade >= 15) {
    document.write ('Juvenil');
    } else if (idadeN <= 14) { 
    document.write ('Infantil');
    } 



/*Faça um programa que receba a idade de uma pessoa e mostre na saída em qual categoria ela se encontra:
10-14 infantil
15-17 juvenil
18-25 adulto
*/
    


