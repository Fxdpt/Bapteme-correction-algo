/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */
function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr.splice.apply(arr, [i,1].concat(arr[i]));
      i--;
    }
  }
  
  return arr;
} 

function sum(arr) {
  var total = 0;
  var arr = flatten(arr);
  
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }
  
  return total;
}

/**
Le résultat est correct !
Bien joué, celui ci n'était vraiment pas facile !

Ta fonction flatten est très bien trouvé, mais peut-être un peu complexe pour résoudre le problème de cet exercice

Lorsque tu développes essaie de garder le concept KISS "Keep It Sweet and Simple" ce qui veut dire qu'il faut au maximum
essayer de faire au plus simple et agréable a la lecture !

Tu pourrais par exemple utiliser le principe de la récursivité, c'est à dire appeler ta fonction, dans ta fonction ! (sisi c'est possible)
if (typeof arr[i] === 'number') {
  total += arr[i];
} else if (typeof arr[i] === 'object') {
  total += sum(arr[i])
}

Pour terminer, tu peut aussi utiliser la structure "for in" qui te permet de boucler directement sur le nombre d'entrée de ton tableau en récupérant seulement les index
Cela permet d'être plus concis qu'une boucle for avec un compteur qui incrémente.

for (var i in arr) {
  if (typeof arr[i] === 'number') {
    total += arr[i];
  }
}

Très bon challenge ! Tu t'en est très bien sortit sur l'ensemble des exercices
 */