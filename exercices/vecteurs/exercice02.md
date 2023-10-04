Exercice 2 : 

Ecrire une fonction retournant la somme de tous les éléments d'un vecteur d'entiers passé en paramètre. 

Ecrire une fonction retournant la somme d'un élément sur deux d'un vecteur d'entiers passé en paramètre. 
[4,6,7,9,3] => 4+7+3 = 14.

fonction somme(v : entier[]) : entier
i, somme : entier; 
i:=0;
somme:=0;
debfonc
	tant que i < longeur(v) faire 
		somme:= somme + v[i]; 
		i:= i+1;
	finfaire
	retour somme;
finfonc


fonction sommeUnSurDeux(v : entier[]) : entier
i, somme : entier; 
i:=0;
somme:=0;
debfonc
	tant que i < longeur(v) faire 
		somme:= somme + v[i];
		i:= i+2;
	finfaire
	retour somme;
finfonc

************** OU ******************
//fonction qui marche pour plusieurs cas : 
// 	si pas > 0 alors on fait de gauche à droite et on saute de "pas"
//	si pas < 0 alors on fait de droite à gauche et on saute de "pas"
//  si pas = 0 alors erreur

fonction somme(v : entier[], pas : entier) : entier 
debfonc
	i, res : entier;
	res := 0;
	si pas > 0 alors
		i := 0;
		tantque i < longueur(v) faire
			res := res + v[i];
			i := i + pas;
		finfaire
	sinon si pas < 0 alors
		i := longueur(v) - 1;
		tantque i >= 0 faire
			res := res + v[i];
			i := i + pas; 
		finfaire
	sinon
		affiche('erreur du paramètre pas');
	finsi;
	retour res;
finfonc