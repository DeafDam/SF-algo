Un magasin de reprographie facture 1 € les dix premières photocopies, 0.50€ les vingt suivantes et 0,20 € au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante.

```
nbPhotocopies : entier;
montant : réel;
afficher("Combien de photocopies désirez-vous faire ?")
lire(nbPhotocopies);
montant := 0;
si nbPhotocopies <= 0 alors
	afficher("Nombre de photocopies incorrect");
sinon si nbPhotocopies <= 10 alors
	montant := nbPhotocopies * 1;
sinon si nbPhotocopies <= 30 alors
	montant := 10 + (nbPhotocopies - 10) * 0.5;
sinon
	montant := 20 + (nbPhotocopies - 30) * 0.2;
finsi;

afficher("Le montant est de " + montant);
```
