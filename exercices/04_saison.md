Ecrire un algorithme permettant d’afficher la saison en introduisant le numéro du mois.

mois : entier;
afficher("Quel est le numéro du mois ?");
lire(mois);
si mois < 1 ou mois > 12 alors
	afficher("Mois incorrect");
sinon si mois >= 3 ou mois < 6 alors
	afficher("Printemps");
sinon si mois >= 6 ou mois < 9 alors
	afficher("Eté");
sinon si mois >= 9 ou mois < 12 alors
	afficher("Automne");
sinon 
	afficher("Hiver");
finsi;