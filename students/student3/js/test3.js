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
for (var i=str.length; i>=0; i--){
    if (str[i]=="."){
        var j= str.slice(i+1,str.length);
        console.log(j);
        return j;
    }
}
return false;
}


/**
Le résultat est correct !

Tu n'étais pas obligé de boucler sur l'ensemble de ta string, il existe la methode split qui te permet de découper une string en tableau:

var parts = str.split('.');
De cette manière tu découpe ta string en tableau a chaque que le caractère '.' est trouvé.

exemple avec test1.css
tu obtiendrais un tableau ["test1", "css"]

Tu peut ensuite controller par exemple la taille du tableau pour savoir si une extension a été trouvé
if (parts.length === 1) {
  return false;
}
Si ton tableau n'a qu'un seul élément, c'est que le caractère '.' n'a jamais été trouvé et qu'il n'y a donc aucune extension

tu peut ensuite retourner le dernier élément de ton tableau car ça sera forcément l'extension du fichier.
return parts[parts.length - 1];

 */