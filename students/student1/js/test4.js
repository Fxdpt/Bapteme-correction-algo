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

   var result = arr[0];

   if (arr.length === 0) {

      return false;
   }

   for (var index = 1; index < arr.length; index++) {

      if (result.length < arr[index].length) {

         result = arr[index];
      }
   }
   return result;
}

/**
Le résultat est correct !

Pour ta boucle il existe aussi la structure "for in" qui te permet de boucler directement sur le nombre d'entrée de ton tableau  en récupérant seulement les index
Cela permet d'être plus concis qu'une boucle for avec un compteur qui incrémente.

for (var index in arr) {
   if (result.length < arr[index].length) {
      result = arr[index];
   }
}
*/