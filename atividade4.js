const n1Text = prompt ('Digite um número');
const n1 = Number(n1Text)
let raiz
let quadrado

if (n1 % 2 == 0){
    document.write('O número é par');
    document.write('<br>');
    raiz = Math.sqrt(n1);
    document.write(`A raiz quadrada do número é: ${raiz}`);
}else if (n1 % 2 == 1){
    document.write('O número é ímpar');
    document.write ('<br>')
    quadrado = n1*n1
    document.write(`O quadrado do número é: ${quadrado}`);
}