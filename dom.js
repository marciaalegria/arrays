//titulo
document.write("<h2> Lista Pacientes </h2>");

//mostrando total pacientes

document.write(`<p>Atenciones totales para traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Atenciones totales para radiología: ${radiologia.length}</p>`);
document.write(`<p>Atenciones totales para dental: ${dental.length}</p>`);

//primera atenncion paciente, rut, prevision separados por un guión

var first_trauma= new Array(traumatologia[0].paciente, traumatologia[0].rut, traumatologia[0].prevision, );
var first= first_trauma.join("-");

//última atención paciente rut, prevision, separado por guion
var las_trauma= traumatologia.reverse();
var last= new Array (las_trauma[0].paciente, traumatologia[0].rut, traumatologia[0].prevision);



document.write(`<p>Primera atención traumatología: ${first} última atención: ${last.join("-")}</p>`);


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

var dental_list= [];
for ( i = 0; i < dental.length; i++) {
    console.log(i);
    
}
document.write(dental_list);