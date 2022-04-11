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

    var str = str.lastIndexOf('css';'js';'eslintrc';'eslintrc');
    console.log(str);
    return str;
}

/**
Les tests ne sont pas passé

L'utilisation de lastIndexOf était une très bonne idée,
Cependant cette fonction prends 2 paramètres, le premier est la valeur recherché, la seconde est un paramètre optionnel
qui correspond a l'index par lequel on veut commencer la recherche dans notre string.

Une des solutions aurait été de découper tes strings en tableau grâce a la méthode split:

var parts = str.split('.');

Exemple avec test1.css cela aurait donné:
['test1','css']

De cette façon tu peut ensuite vérifier la longueur de ton tableau. Si il n'y a qu'un élément, cela veut dire que la string n'avait pas d'extension
et que tu peut retourner false.

if (parts.length === 1) {
  return false;
}

Si ton tableau a plus d'un élément, tu peut donc retourner le dernier, ce sera forcément l'extension du fichier.

var lastPart = parts[parts.length - 1];

return lastPart;
*/