/*
 * Tests
 */
var container = document.getElementById('container');
if (
  doubleInt(4) === 8
  && doubleInt(-4) === -8
  && doubleInt(0) === 0
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo1
 *
 * int est un entier
 * Le doubler, et le retourner
 */
function doubleInt(int) {
return int*2;
}

/**
Le résultat est correct !

De plus tu as réussi a trouver la manière la plus concise de faire cet exercice.

Fait attention a ton indentation et aux espaces pour gagner en lisibilité:
function doubleInt(int) {
  return int * 2;
}
 */
