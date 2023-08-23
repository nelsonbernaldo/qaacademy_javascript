function somar(){
    const a = 10;
    const b = 20;
    const resultado = a+b;
    console.log(resultado);

}

somar();

function dividir(){
    const div = 1000;
    const divv = 586;
    const resultado = div/divv
    console.log(resultado)


}

dividir();

function subtração(){
    const sub = 3456;
    const subb = 345;
    resultado = sub-subb;
    console.log(resultado);

}

subtração();

function subtraçãoComParemetro(a,b){
    const subtração = a - b;
    console.log(subtração);
    console.log('a:'+ 100 , 'b:'+ 45);
}
subtraçãoComParemetro(100,45);

function exemploRetorno(){
    return 'Vou ser expecialista em cypress';
}

console.log(exemploRetorno());


function somaComRetorno(a,b,c){
const somatoria = a+b+c;
return somatoria;
}

console.log(somaComRetorno(10,20,30));

function subtracaoComRetorno (d,f,g){
    const subtracao = d-f-g;
    return subtracao;
}
console.log(subtracaoComRetorno(50,10,15))