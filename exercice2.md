```
nom : chaîne;
anneeNaissance, anneeEnCours, nbEnfants, numEnf : entier;
affiche('Quel est votre nom ?');
lit(nom);
affiche('Quelle est votre année de naissance ?');
lit(anneeNaissance);
affiche('Quelle est l'année en cours ?');
lit(anneeEnCours);
affiche(nom + ', vous avez ' + (anneeEnCours - anneeNaissance) + ' ans');
affiche(nom + ', combien avez vous d'enfants ?');
lit(nbEnfants);
numEnf := 1;
tantque numeroEnfant <= nbEnfants faire
  affiche('Quelle est l'année de naissance de l\'enfant numéro ' + numEnf + '?');
  lit(anneeNaissance);
  affiche('Votre enfant a ' + (anneeEnCours - anneeNaissance) + ' ans');
  numEnf := numEnf + 1;
finfaire
```

Variante

```
anneeNaissance, anneeEnCours, age : entier;
prenom, reponse : chaîne;
affiche('Quelle est l'année en cours ?');
lit(anneeEnCours);

faire
  affiche("Prénom ?");
  lit(prenom);
  affiche('Année de naissance ?');
  lit(anneeNaissance);
  age := anneeCourante - anneeNaissance;
  affiche(prenom + ' : ' + age + ' ans');
  affiche("Souhaitez-vous calculer un autre âge ? oui/non");
  lit(reponse);
tantque reponse = 'oui';
affiche('Fin');
```
