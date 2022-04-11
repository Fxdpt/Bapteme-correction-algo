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
  if (arr.length === 0) return false;
  
  var longuest = arr.reduce(function(a, b) {
    if (typeof a === 'number') a = String(a);
    if (typeof b === 'number') b = String(b);
    return a.length > b.length ? a : b;
  }, '');  
  
  return longuest;
}

/**
Le résultat est correct !

L'utilisation de reduce est une bonne idée !

Attention cependant avec tes conditions, ici on commence à avoir des conditions un peu plus
complexe et on perds un peu en lisibilité

En bonus, c'est très bien d'utiliser des noms de variables en anglais ! Mais attention a l'orthographe :) "longest"
*/
