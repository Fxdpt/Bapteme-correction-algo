/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {
  var separator = '.';
  var getExtension = str.split(separator);
  var extension = getExtension.slice(-1)[0];
  
  if (getExtension.length === 1) return false;
  
  return extension;
}

/**
Le résultat est correct !

Pour faire encore mieux tu n'es pas obligé d'utiliser de variable "separator" et directement splitter ('.')

Ta condition est correct et lisible car elle est simple, si jamais tu as des conditions un peu plus complexe fait attention
a ne pas perdre en lisibilité pour gagner quelques ligne de code.
 */