const div_colorida = document.getElementById("colorida");
const input_cor = document.getElementById("input_cor");
const meu_primeiro_array = [1,2,3,4, 'casa'];

div_colorida.style.height = "1em";
div_colorida.style.backgroundColor = "black";

function mudar_cor(e){
    div_colorida.style.backgroundColor = e.target.value;
    console.log(e.target.value);
}

input_cor.onchange = mudar_cor;

/* imprimir array */
let contador = 0;
while(contador<meu_primeiro_array.length){
    console.log(meu_primeiro_array[contador]);
    contador++;
}

for(let i=0; i<meu_primeiro_array.length; i++){
    console.log("Com for:", meu_primeiro_array[i]);
    contador++;
}

meu_primeiro_array.forEach( (ele, indice) => {
    console.log(ele, indice);
});

for (const ele of meu_primeiro_array){
    console.log('for of', ele); 
}

console.log('map', meu_primeiro_array.map ( (e) => e+1 ));