//titulo
document.write("<h2> Lista Pacientes </h2>");

//mostrando total pacientes

document.write(`<p>Atenciones totales para traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Atenciones totales para radiología: ${radiologia.length}</p>`);
document.write(`<p>Atenciones totales para dental: ${dental.length}</p>`);

//primera atencion trauma paciente, rut, prevision separados por un guión

var first_trauma= new Array(traumatologia[0].paciente, traumatologia[0].rut, traumatologia[0].prevision, );
var first= first_trauma.join("-");

//última atención paciente rut, prevision, separado por guion
var las_trauma= traumatologia.reverse();
var last= new Array (las_trauma[0].paciente, traumatologia[0].rut, traumatologia[0].prevision);



document.write(`<p>Primera atención traumatología: ${first} última atención: ${last.join("-")}</p>`);


//primera atencion radiologia paciente, rut, prevision separados por un guión

var first_radio= new Array(radiologia[0].paciente, radiologia[0].rut, radiologia[0].prevision, );
var first_rx= first_radio.join("-");

//última atención radiologia paciente rut, prevision, separado por guion
var las_radio= radiologia.reverse();
var last_rx= new Array (las_radio[0].paciente, radiologia[0].rut, radiologia[0].prevision);



document.write(`<p>Primera atención radiología: ${first_rx} última atención: ${last_rx.join("-")}</p>`);

//primera atencion dental paciente, rut, prevision separados por un guión

var first_dental= new Array(dental[0].paciente, dental[0].rut, dental[0].prevision, );
var first_dtl= first_dental.join("-");

//última atención dental paciente rut, prevision, separado por guion
var las_dental= dental.reverse();
var last_dtl= new Array (las_dental[0].paciente, dental[0].rut, dental[0].prevision);

document.write(`<p>Primera atención dental: ${first_dental} última atención: ${last_dtl.join("-")}</p>`);

//agregando nuevo array a traumatologia

for(i = 0; i < traumatologia2.length; i++){
    traumatologia.push(traumatologia2[i])
}
console.log(traumatologia);//12 pacientes

//Eliminar el primer elemento del arreglo de Radiología.
var eliminado = radiologia.shift();
console.log(radiologia);//4
// borrar ultimo elemento radiologia
var r = radiologia.pop();
console.log(radiologia);//3

/*Imprimir en HTML consultas de Dental separando por
un guión cada dato y cada fila de información debe estar separada por un párrafo. */


for ( i = 0; i < dental.length; i++) {
    var f = new Array (dental[i].hora, dental[i].especialista, dental[i].paciente, dental[i].rut, dental[i].prevision);
    var d = f.join(" - ");
    document.write(d + "<br>");
}
document.write("<h2>Listado total pacientes</h2>")
/* Imprimir listado total de pacientes solo nombres */

for ( i = 0; i < traumatologia.length; i++) {
    document.write( traumatologia[i].paciente + "<br>");
    
}

for ( i = 0; i < radiologia.length; i++) {
    document.write( radiologia[i].paciente + "<br>");
    
}
for ( i = 0; i < dental.length; i++) {
    document.write( dental[i].paciente + "<br>");
    
}

//cambiar fonasa por ISAPRE y viceversa 

var prev="ISAPRE";
var prev_1="FONASA";

dental.map(function(dato){
    if(dato.prevision == prev_1){
      dato.prevision = prev;
    }else if(dato.prevision == prev){
        dato.prevision = prev_1;
    }
    
    return dato;
  });
  
 //imprimir resultado junto con rut asociado, separados por punto y coma.
 document.write(`<h2>previsión cambiada y rut asociados</h2>`)
for ( i = 0; i < dental.length; i++) {
    var pr = dental[i].prevision;
    var rut = dental[i].rut;
    
    document.write(pr," ; ", rut + "<br>");
    
    
}

