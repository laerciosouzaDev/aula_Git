var qg = prompt("digite a quantidade de gols:");
var qc = prompt("digite a quantidade de passes certos:");
var qe = prompt("digite a quantidade de passes errados");

var pontos = (qg * 50) + (qc * 10) - (qe * 5);

alert("pontuação total:" + pontos);

if (pontos <50) {
    document.write("pessima partida");
}else if (pontos >=50 && pontos <100){
    document.write("pessima partida");
}else if (pontos >=100 && pontos <150){
    document.write("pessima partida");
}else if (pontos >=150 && pontos <200){
}else
     document.write("jogou demais!!!");

     
    

    


