
var listTrauma =[];
for (i = 0; i < traumatologia.length; i++){
    listTrauma.push(traumatologia[i])
}

for(i = 0; i < traumatologia2.length; i++){
    listTrauma.push(traumatologia2[i])
}

for (i = 0; i < listTrauma.length; i++){
    document.write(`<p>${i} -${listTrauma[i].hora}-${listTrauma[i].especialista}</p>`);
}

document.write("<h2> Lista Pacientes Traumatologia</h2>");
document.write()