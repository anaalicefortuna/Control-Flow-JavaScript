const primeiroN = prompt ('Digite um número');
const segundoN = prompt ('Digite um número');
const terceiroN = prompt ('Digite um número');

if (primeiroN > segundoN && segundoN > terceiroN){
    document.write(`A sequência é: ${terceiroN}, ${segundoN} e ${primeiroN}`)
}else if (segundoN > terceiroN && terceiroN > primeiroN) {
    document.write(`A sequência é: ${primeiroN}, ${terceiroN} e ${segundoN}`)
} else if (terceiroN > primeiroN && primeiroN > segundoN){
    document.write(`A sequência é: ${segundoN}, ${primeiroN} e ${terceiroN}`)
}else if (primeiroN > terceiroN && terceiroN > segundoN){
    document.write(`A sequência é: ${segundoN}, ${terceiroN} e ${primeiroN}`)
}else if (segundoN > primeiroN && primeiroN > terceiroN){
    document.write(`A sequência é: ${terceiroN}, ${primeiroN} e ${segundoN}`)
}else if (terceiroN > segundoN && segundoN > primeiroN){
    document.write(`A sequência é: ${primeiroN}, ${segundoN} e ${terceiroN}`)
}