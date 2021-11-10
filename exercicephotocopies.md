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
