Exercice 15

Ecrire la procédure insertion(v : entier[], element : entier) permettant d'insérer l'élément passé en paramètre dans le vecteur v si c'est possible. Le vecteur n'est pas trié et il peut contenir des doublons.

procédure insertion(v : entier[], element : entier)
debproc
	i : entier;
	i := 0;
	tantque i < longueur(v) et v[i] != indéfini faire
		i := i + 1;
	finfaire;
	si i != longueur(v) alors 
		v[i] := element;
	sinon
		v2 : entier[];
		v2 := entier[longueur(v) + 1];
		recopie(v, v2);
		v2[longueur(v2)] := element;
		v := v2;
	finsi;
finproc

Ecrire la procédure insertiontrié(v : entier[], element : entier) qui fait la même chose mais avec un vecteur trié.

procédure insertion(v : entier[], element : entier)
debproc
	i : entier;
	i := 0;
	tantque i < longueur(v) et v[i] < element && v[i] != indéfini faire
		i := i + 1;
	finfaire;
	si i != longueur(v) && v[i] = indéfini alors 
		v[i] := element;
	sinon
		v2 : entier[];
		v2 := entier[longueur(v) + 1];
		recopie(v, v2);
		v2[longueur(v2)] := element;
		v := v2;
	finsi;
finproc