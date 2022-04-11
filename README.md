# Challenge : Parcours du combattant Algo

Voici un nouveau parcours en 4 étapes !

## Instructions

Directement dans chaque fichier JS :smiley:

Chaque fichier JS comporte un test affiché "Yeaaah" si votre fonction marche bien, ou "Nope" si le résultat renvoyé n'est pas bon.

## Bonus

L'exo 5 est un petit défi sympathique :+1:

## Whaaat ?!

- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/lastIndexOf
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/continue
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions

## Retour sur chaque étudiant

### Etudiant 1:
De bonnes choses, les 4 premiers exercices ont été réussi, le dernier exercice a échoué sur le dernier test car les tableaux imbriqués n'ont pas été pris en comptes.

Des petites choses à corriger (gestion des return, initialisation de variable non nécessaire) mais bon challenge dans l'ensemble

### Etudiant 2:
Très bon challenge, les 5 exercices ont été réussis, bonne maitrise et bonne connaissance des différentes fonctions native de Javascript.

Attention a ne pas vouloir faire "trop" technique au détriment de la lisibilité du code.

### Etudiant 3:

Eleve qui montre quelques difficultés sur les concept de base (espacement, indentation), ne voit peut-être pas tout de suite la solution la plus simple et pars dans des développements compliqués.

Il est cependant important de souligner que les 5 exercices ont été fait et réussis. Il/elle ne s'est pas laissé(e) abattre par les difficultés et a perséverer jusqu'a réussir. Très bon esprit !

### Etudiant 4:

Eleve qui a l'air en difficulté, les 2 premiers exercices étaient correct en terme de résultat. Quelques lacunes sur l'indentation, les espacement. le 3eme exercice n'as pas été terminé, et les exercice 4 et 5 n'ont pas été fait.
Je n'ai pas relevé les autres petits points (tel que les console.log) pour ne pas plus l'acculer. Je pense qu'il serait nécessaire de peut-être faire un point avec cet élève pour identifier les raisons qui l'ont fait abandonner ce challenge (incompréhension des énoncés ? Difficulté a trouver les solutions ? Autre soucis externe a la formation ?) et voir comment se passe la formation pour lui en ce moment.


## Retour Général.

Globalement je dirais que ce challenge est satisfaisant dans l'ensemble en prenant en compte les résultats des étudiants. Peut-être faire un petit point sur la récursivité qui a sembler échapper a tout les étudiants sur le 5e exercice. La réponse était dans la doc MDN des fonctions mais tous sont passés a travers ? peut etre ancré le résultat directement ? Ou un simple petit rappel oral en fin de journée sur cette notion !

Concernant les corrections nous pourrions supprimer les exemple commentés dans les exercices 2 et 3.

Dans l'exercice 3 nous pourrions aussi directement faire un `return parts[parts.length - 1]` plutôt que de créer une variable. Cela permettrais d'être consistant avec les autres exercices.

Dans l'exercice 4 nous pourrions déplacer la condition
```
  if (arr.length === 0) {
    return false;
  }
```
en début de fonction, pour éviter d'éxécuter du code inutilement