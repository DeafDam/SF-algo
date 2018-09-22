Ecrire un algorithme permettant à un utilisateur de calculer son âge en lui demandant son année de naissance et l'année en cours (on ne tient pas compte des jours et des mois). 

```
anneeNaissance, anneeEnCours : entier;
affiche('Quelle est votre année de naissance ?');
lit(anneeNaissance);
affiche('Quelle est l'année en cours ?');
lit(anneeEnCours);
affiche('Vous avez ' + (anneeEnCours - anneeNaissance) + ' ans');
```
