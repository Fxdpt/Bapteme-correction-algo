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

   var rep = str.split('.')
   var index = rep.length - 1;
   if ( str.lastIndexOf('.') == -1){

      return false;
   }
   else {

      console.log(rep[index]);
      return (rep[index]);
   }
}

/**
Le résultat est correct !

Pour améliorer et réduire un peu ton code tu aurais put ne pas créer la variable index et retourner
rep[rep.length - 1]

Dans ta condition tu peut aussi tester directement la longueur de ton tableau:
lorsque tu as splitté, tu as découpé ta string en un tableau.
Si ce tableau n'a qu'un seul élément, c'est qu'aucune extension n'a été trouvé.

if (rep.length === 1) {
  return false
}

Lorsque tu as fini ton développement pense a vérifier que tu n'as pas laissé de debug non intentionnel (console.log, console.error, alert etc)
 */