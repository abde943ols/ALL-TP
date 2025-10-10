function calcul_moyenne()
{
    var a = prompt("Donner la première note :");
    var b = prompt("Donner la deuxième note :");
    var c = prompt("Donner la troisième note :");

    var somme = Number(a) + Number(b) + Number(c)

    document.write("voici la somme : " + somme +"<br>");
    var moyenne = somme/3;

    document.write("voici la moyenne : " + moyenne +"<br>");

    if(moyenne < 10) {
        document.write("Vous n'estes pas admis");
}
    else{
        document.write("Vous etes admis");
    }
}   
 function simple_affichage() {
     let name = prompt("donner votre nom");
     let prenom = prompt("donner votre prenom");

 document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
 document.write("Bonjour" + prenom + " " + name);
 document.write('</div>');

 }   
function verif_age() {
    let age = prompt("quelle est votre age ?");
    if(age < 18) {
        document.write("Vous etes mineur");
        document.bgColor="red" 

    }
else {
    document.write("Vous etes majeur");
    document.bgColor="green" 

}
}
function test_couleur() {
    let couleur = prompt("donner une couleur")
    if(couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor = "red"

    }

 else if (couleur == "blue" || couleur == "blue") {
    document.body.style.backgroundColor = "blue"
}
else if (couleur == "vert" || couleur == "green") {
    document.body.style.backgroundColor = "green"
}
else if (couleur == "rose" || couleur == "pink") {
    document.body.style.backgroundColor = "pink"
}
else {
    document.write("Couleur non comprise");
}
}