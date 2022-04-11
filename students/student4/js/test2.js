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
     var int = int % 2 == 0;
console.log(int);
return int;
}

/**
Le résultat est correct !
Comme précedemment tu pourrais tout faire en une seule ligne:

function isEven(int) {
  return int % 2 === 0;
}

De cette manière tu retournes directement le résultat de l'égalité que tu teste.
 */