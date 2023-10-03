Ecrire la fonction permettant de renvoyer le minimum entre trois nombres 

fonction min2(a : réel, b : réel) : réel
debfonc
	si (a < b) alors
		retour a; 
	finsi;
	retour b;
finfonc;

fonction min3(nb1: entier, nb2: entier, nb3: entier) : entier
min : entier
debfonc
	min := min2(nb1, nb2);
	si min < nb3 alors
		retour(min);
	sinon 
		retour(nb3);
	finsi;
finfonc;

*************** OU ************
fonction min3(a: entier, b: entier, c: entier) : entier
debfonc
	retour(min2( min2(a,b) ,c));
finfonc;