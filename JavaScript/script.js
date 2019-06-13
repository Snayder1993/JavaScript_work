var miArreglo = [1,2,3,4,5,6] //variable global
var miNomina=['alex','pedro', 'diego']

function add(a,b){//funcion sumar dos numeros
return a-b;
}

//incremento en el array de 1
function incrementandoArray(){
    for(var i = 0; i < miArreglo.length; i ++){
     miArreglo[i] = miArreglo[i] + 1;
    }
}

//homework
//1)multiplicar todo el array *2
function multiplicar(){
    for (var i=0; i<miArreglo.length; i++){
     miArreglo[i]*=2;
    }   
}

//2) lista de nombres cambiar a mayusculas
function PasarMayusculas(){
for (var i=0; i<3; i++){
    miNomina[i]=miNomina[i].toUpperCase();  
}
}

//actualizar un dato en un array
function UpdateElementPosition5InArray(){
    miArreglo[4] = 10;    
}

//ejemplo practicos
function Poderconducir(a){
    if(a>=18){
        console.log("Puede conducir")
    }else{
        console.log("NO puede conducir")
    }
}
function Pidenota(b){
    if(b>0 && b<=10){
        if(b<3){
            console.log("Muy deficiente");
        } else if(b<5){
            console.log("Insuficiente");
        }else if(b<6){
            console.log("Suficinete");
        }else if (b<7){
            console.log("Bien");
        }else if(b<9){
            console.log("Notable");
        }else if(b<=10){
            console.log("Sobresaliente");
        }else{  
            console.log("nota erronea");
        }
    } 


}

let carros =[{marca:"toyota",valor: 1000, tipo:"ligero"},
            {marca:"kia",valor : 30000, tipo:"camioneta"},
            {marca:"hino",valor:25000, tipo:"bus"}] 


function update(){
    for (var i=0; i<carros.length; i++){
        
        if (carros[i].marca === "kia") {
            carros[i].tipo="ligero";
        }        
    }
    console.log(carros)
}
const array2d = [["yasser", "diego"], ["Sofia", "Pablo"]]

function searchNameDiego () {
    for(var i = 0; i < array2d.length; i++){
        for(var j = 0; j < array2d.length; j++){
            if(array2d[i][j] === "diego"){
                console.log(array2d[i][j])
            }
        }
    }
}

let computadoras =[{marca:"hp",costo: 1000, tipo:"laptop", accesorios:["mouse","usb"]},
            {marca:"toshiba",valor : 3000, tipo:"laptop",accesorios:["mouse","parlantes"]},
            {marca:"sansung",valor:2500, tipo:"escritorio",accesorios:["mouse","usb","teclado"]}];
            
function parlantes(){
    for(var i=0;i<computadoras.length; i++){
        for(var j = 0; j < computadoras.length; j++){
        if (computadoras[i].accesorios==="parlantes"){
            console.log(computadoras[i][j])
        }
    }
}
}           






//console.log(miArreglo)
//console.log("Tamano de mi arreglo", miArreglo.length)

//console.log("Tamano de mi arreglo  " + miArreglo.length)

//console.log("hola no me jodas");

