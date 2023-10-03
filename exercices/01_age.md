Ecrire un algorithme permettant à un utilisateur de calculer son âge en lui demandant son année de naissance et l'année en cours (on ne tient pas compte des jours et des mois):

anneeNaissance, anneeEncours, age : entier;
affiche('Quelle est ton année de naissance ?');
lit(anneeNaissance);
affiche("Quel est l'année en cours ?");
lit(anneeEnCours);
age := anneeEnCours - anneeNaissance;
si (age < 0) alors
	afficher('Eh! T'es pas né !');
sinon si (age = 0) alors
	afficher("'T'es mignon! Tu as moins d'un an.");
sinon si (age = 1) alors
	afficher('Ouah, tu as ' + age + ' an !');
sinon 
	afficher('Ouah, tu as ' age + ' ans !');
finsi;