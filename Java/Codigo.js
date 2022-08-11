dineroRobert = prompt ("Cuanto dinero tienes Roberto?");
dineroPedro = prompt ("Cuanto dinero tienes Pedro?");
dineroCofla = prompt ("Cuanto dinero tienes Cofla?");
dineroCofla = parseInt (dineroCofla)

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla Comprate el helado de agua");
    alert(`Cofla, te sobran` + (dineroCofla -0.6));
}
else if (dineroCofla >=1 && dineroCofla < 1.6){
    alert("Cofla Comprate el helado de crema");
    alert(`Cofla, te sobran` + (dineroCofla -1));
}
else if (dineroCofla >=1.6 && dineroCofla < 1.7){
    alert("Cofla Bombon de heladix");
    alert(`Cofla, te sobran` + (dineroCofla -1.6));
}
else if (dineroCofla >=1.7 && dineroCofla < 1.8){
    alert("Cofla Bombon de heladovich");
    alert(`Cofla, te sobran` + (dineroCofla -1.7));
}
else if (dineroCofla >=1.8 && dineroCofla < 2.9){
    alert("Cofla Bombon de Helardo");
    alert(`Cofla, te sobran` + (dineroCofla -1.8));
}
else if (dineroCofla >=2.9){
    alert("Cofla Helado con confites O pote de 1/4");
    alert(`Cofla, te sobran` + (dineroCofla -2.9));
}
else{
    alert ("Lo siento Cofla, no puedes comprar ningun helado");
}
//----------------------------------------------------------
if (dineroRobert >= 0.6 && dineroRobert < 1){
    alert("Roberto Comprate el helado de agua");
}
else if (dineroRobert >=1 && dineroRobert < 1.6){
    alert("Roberto Comprate el helado de crema");
}
else if (dineroRobert >=1.6 && dineroRobert < 1.7){
    alert("Roberto Bombon de heladix");
}
else if (dineroRobert >=1.7 && dineroRobert < 1.8){
    alert("Roberto Bombon de heladovich");
}
else if (dineroRobert >=1.8 && dineroRobert < 2.9){
    alert("Roberto Bombon de Helardo");
}
else if (dineroRobert >=2.9){
    alert("Roberto Helado con confites O pote de 1/4");
}
else{
    alert ("Lo siento Roberto, no puedes comprar ningun helado");
}
//------------------------------------------------------------
if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro, Comprate el helado de agua");
}
else if (dineroPedro >=1 && dineroPedro < 1.6){
    alert("Pedro, Comprate el helado de crema");
}
else if (dineroPedro >=1.6 && dineroPedro < 1.7){
    alert("Pedro, Bombon de heladix");
}
else if (dineroPedro >=1.7 && dineroPedro < 1.8){
    alert("Pedro, Bombon de heladovich");
}
else if (dineroPedro >=1.8 && dineroPedro < 2.9){
    alert("Pedro, Bombon de Helardo");
}
else if (dineroPedro >=2.9){
    alert("Pedro, Helado con confites O pote de 1/4");
}
else{
    alert ("Lo siento Pedro, no puedes comprar ningun helado");
}