/*
 * Tests
 */
var container = document.getElementById('container');
if (!isEven(1) && isEven(2) && !isEven(3) && isEven(35468432)) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo2
 *
 * int est un entier
 * Retourner "true" si c'est pair, "false" si c'est impair
 */
function isEven(int) {
  return (int % 2 === 0);
}

/**
Le résultat est correct !

De plus, tu as réussi à faire cela de la manière la plus concise qu'il soit.
Les parenthèses ne sont pas nécessaire ici car ton opération sera effectué avant ton instruction return
 */