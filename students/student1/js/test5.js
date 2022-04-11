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

   var result = 0;

   if (arr.length === 0) {
      console.log("valeur renvoyée :"+result);
      return result;
   }

   for (var i = 0; i < arr.length; i++) {

      if (isNaN(arr[i])) {
         console.log("valeur ignorée :"+arr[i]);
         i++;
      }
      if (!isNaN(arr[i])) {

         result = result + arr[i];
      }
   }
   console.log("resultat renvoyée : "+result);
   return result;
}

/**
Le dernier test n'est pas passé,

lorsque tu testes avec isNaN, lors de l'éxécution du dernier test, certaines valeurs sont des chiffres stockées dans un tableau
or isNaN avec un tableau passé en argument renverra true, donc les chiffres de ces tableau ne seront pas additionés.

Une solution serait de faire de la "récursivité", on dirait un peu de la magie au début, mais quand on sait que ça existe,
ça facilite la vie:
if (typeof arr[i] === 'number') {
  result += arr[i];
}

else if (typeof arr[i] === 'object') {
  result += sum(arr[i]);
}

ta fonction sum prends un tableau en paramètre, ce qui veut dire que si ton item est un tableau, tu peut rappeler ta fonction sum,
même a l'intérieur d'elle même ! De cette manière tu pourrais avoir énormément de tableau imbriqué, ta fonction serait capable d'additioner tout les nombres!

Enfin pour terminer, tu peut simplifier cette ligne:
result = result + arr[i];
en:
result += arr[i];

De cette manière tu prends le résultat de result, auquel tu additionnes arr[i]

Cette exercice était plus dur que les précédents mais tu t'en es bien sortit dans l'ensemble du challenge. Continue comme ça.
 */