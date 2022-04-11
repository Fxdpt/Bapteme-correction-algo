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
    var int = int * 2;
     console.log(int);
    // console.log(typeof int);
    return int;
}
 console.log(doubleInt());

/**
Le résultat est correct !

Tu peut aussi simplifier ton code en une seule ligne:
function doubleInt(int) {
  return int * 2;
}

Lorsque tu développes, de manière générale garde a l'esprit que si tu crééer une variable pour la retourner a la
ligne suivante, c'est que tu n'as pas besoin de variable.
 */