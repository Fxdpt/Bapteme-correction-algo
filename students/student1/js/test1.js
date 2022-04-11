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

   var rep = int * 2;
   return rep;
}

/**
Le résultat est correct !
Tu peut aussi simplifier ton code en une seule ligne:
function doubleInt(int) {
  return int * 2;
}

Lorsque tu développes, de manière générale garde a l'esprit que si tu crééer une variable pour la retourner a la
ligne suivante, c'est que tu n'as pas besoin de variable.

Pense à bien identer ton code (Pas de saut de ligne après le début de la fonctione, et 2 espaces d'indentation)
*/
