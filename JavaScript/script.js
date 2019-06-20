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


//array de computadoras
let computadoras =[{marca:"hp", valor: 1000, tipo:"laptop", accesorios:["mouse","usb"]},
            {marca:"toshiba",valor : 3000, tipo:"laptop",accesorios:["mouse","parlantes"]},
            {marca:"sansung",valor:2500, tipo:"escritorio",accesorios:["mouse","usb","teclado"]}];

// buscar dentro de computadoras los accesorios de parlantes
function parlantes(){
    var computadora = ""
    for(var i=0; i < computadoras.length; i++){
        //console.log(computadoras[i])
        var arrayAccesorios = computadoras[i].accesorios;
        for(var j = 0; j < arrayAccesorios.length; j ++){
            if(arrayAccesorios[j] === "parlantes"){
                //console.log(computadoras[i])
                computadora = computadoras[i];
            }
        }
    }
     if(computadora !== ""){
        console.log("Se encontro la computadora: " + computadora.marca + " que tiene el accesorio: " + computadora.accesorios[1])
    }else{
        console.log("no encontro")
    } 
}

//eliminar la computadora marca HP
function delete_PC_HP (){
    for(var i=0; i < computadoras.length; i++){
        if(computadoras[i].marca === "hp"){
            //console.log(computadoras[i]) 
               delete computadoras[i];
        }
    }
    console.log(computadoras)
}

// deborver las comnpus max 400 

function CompusEconomicas (){
    for(var i=0; i < computadoras.length; i++){
        if(computadoras[i].valor <= 2800){
            console.log(computadoras[i]);
        }
    }
}






//console.log(miArreglo)
//console.log("Tamano de mi arreglo", miArreglo.length)

//console.log("Tamano de mi arreglo  " + miArreglo.length)

//console.log("hola no me jodas");

