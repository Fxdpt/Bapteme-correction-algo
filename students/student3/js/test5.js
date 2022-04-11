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

function sum(arr) {
var sum1=0;
for (i=0; i<arr.length; i++){
    if (typeof(arr[i])=="number"){
        sum1+=arr[i];
    }else if (typeof(arr[i])=="string"){
    }
    else if (arr[i].length>0) {
        for (var j= 0; j < arr[i].length;j++) {
            if (arr[i][j].length>0) {
                for (var p= 0; p < arr[i][j].length;p++) {
                    sum1+=arr[i][j][p];
                }}
            else{
                sum1+=arr[i][j];
            }}}}
return sum1;
}

/**
Le résultat est correct !
Tout d'abord bien joué pour avoir réussi cet exercice ! il n'était pas évident !

Il aurait été possible de faire beaucoup plus concis pour éviter de trop nombreuse conditions ou de boucle
Comme dans l'exerice précédent tu peut utiliser la structure "for in" pour éviter d'utiliser un itérateur

Ensuite ta première condition:
if (typeof(arr[i])=="number"){
    sum1+=arr[i];
}
A la bonne approche ! Tu utilises en plus la syntaxe raccourci pour ajouter ton résultat a sum1

Ensuite tu as une condition qui ne fait rien

else if (typeof(arr[i])=="string"){
}

Si ta condition ne fait rien, cela veut dire que tu peut t'en passer

Ensuite la difficulté a été sur ces tableaux imbriqués !
Tu as trouvé un résultat fonctionnel bravo ! Mais tu pouvais aussi utiliser la "récursivité"

Au lieu de
else if (arr[i].length>0) {
  . . .

Tu pourrais tout à fait faire:
else if (typeof (arr[i] === 'object') {
  result += sum(arr[i]);
}

ta fonction sum prends un tableau en paramètre, ce qui veut dire que si ton item est un tableau, tu peut rappeler ta fonction sum,
même a l'intérieur d'elle même ! De cette manière tu pourrais avoir énormément de tableau imbriqué, ta fonction serait capable d'additioner tout les nombres!

Bon challenge ! Tu as sut relever tous les défis et tu ne t'es pas laissé abattre par la difficulté que pouvait présenter le dernier exercice.
Sois bien vigilant sur tes indentations et tes espacements, continue comme ça !
 */