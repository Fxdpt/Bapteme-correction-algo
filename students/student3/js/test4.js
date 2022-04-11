/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
  && getLongestString(['css', 'html', 'js', 'php']) === 'html'
  && getLongestString([]) === false
  && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */
function getLongestString(arr) {
    var plus = 0;
    var nom = null;

for (i=0; i<arr.length; i++){
    if (arr[i].length>plus) {
        plus = arr[i].length
        nom = arr[i]
    }
}
if (nom !==null) {
    return nom;
}else {
    return false;
}
}

/**
Le résultat est correct !

Attention au nommage des variables pour garder en lisibilité.

Pour ta boucle il existe aussi la structure "for in" qui te permet de boucler directement sur le nombre d'entrée de ton tableau en récupérant seulement les index
Cela permet d'être plus concis qu'une boucle for avec un compteur qui itère.

for (var i in arr) {
  if (arr[i].length>plus) {
        plus = arr[i].length
        nom = arr[i]
  }
}

l'instruction return quitte l'execution de ta fonction. Ce qui veut dire que tu n'as pas besoin de else

if (nom !== null) {
    return nom;
}

return false;

De cette manière, si tu rentres dans ta condition, tu retourne ta variable "nom" et donc tu quittes ta fonction.
Si tu ne rentres pas dans ta condition, tu retourne false.
 */