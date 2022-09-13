const n1 = Number (prompt ('Digite um número'));
const n2 = Number (prompt ('Digite um número'));
const n3 = Number (prompt ('Digite um número'));


if(n1 > n2 && n1 > n3){
    document.write(`O maior número é: ${n1}`);
}else if(n2 > n1 && n2 > n3){
    document.write(`O maior número é: ${n2}`);
}else if(n3 > n1 && n3 > n2){
    document.write(`O maior número é: ${n3}`);
}