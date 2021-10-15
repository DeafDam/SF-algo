Ecrire maintenant l'algorithme permettant de demander le nom et l'année de naissance de l'utilisateur. Calculer son age, puis lui demander combien d'enfant il a. Pour chaque enfant, demander son nom et calculer son âge.

```
nom : chaîne;
anneeNaissance, anneeEnCours, nbEnfants, numEnf : entier;
afficher('Quel est votre nom ?');
lire(nom);
afficher('Quelle est votre année de naissance ?');
lire(anneeNaissance);
afficher('Quelle est l'année en cours ?');
lire(anneeEnCours);
afficher(nom + ', vous avez ' + (anneeEnCours - anneeNaissance) + ' ans');
afficher(nom + ', combien avez vous d'enfants ?');
lire(nbEnfants);
numEnf := 1;
tantque numeroEnfant <= nbEnfants faire
  afficher('Quelle est l'année de naissance de l\'enfant numéro ' + numEnf + '?');
  lire(anneeNaissance);
  afficher('Votre enfant a ' + (anneeEnCours - anneeNaissance) + ' ans');
  numEnf := numEnf + 1;
finfaire
```

Variante

```
anneeNaissance, anneeEnCours, age : entier;
prenom, reponse : chaîne;
afficher('Quelle est l'année en cours ?');
lire(anneeEnCours);

faire
  afficher("Prénom ?");
  lire(prenom);
  afficher('Année de naissance ?');
  lire(anneeNaissance);
  age := anneeCourante - anneeNaissance;
  afficher(prenom + ' : ' + age + ' ans');
  afficher("Souhaitez-vous calculer un autre âge ? oui/non");
  lire(reponse);
tantque reponse = 'oui';
afficher('Fin');
```
