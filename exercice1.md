Ecrire un algorithme permettant à un utilisateur de calculer son âge en lui demandant son année de naissance et l'année en cours (on ne tient pas compte des jours et des mois). 

```
anneeNaissance, anneeEnCours : entier;
afficher('Quelle est votre année de naissance ?');
lire(anneeNaissance);
afficher('Quelle est l'année en cours ?');
lire(anneeEnCours);
afficher('Vous avez ' + (anneeEnCours - anneeNaissance) + ' ans');
```
