Exercice 9

Ecrire une fonction prenant en paramètre un vecteur d'entier trié et un entier, et qui retourne vrai si la valeur existe dans le vecteur et faux sinon.

```
fonction cherche(v:entier[]) : booléen
debfonc 
	inf, sup, milieu : entier;
	inf := 0;
	sup := longueur(v) - 1;
	tantque inf <= sup faire
		milieu := (inf + sup) / 2;
		si v[milieu] = nb alors
			retour vrai; //milieu;
		sinon si v[milieu] < nb alors
			inf := milieu + 1;
		sinon
			sup := milieu - 1;
		finsi;
	finfaire;
	retour faux;//-1
finfonc
```

Pour un vecteur de n éléments, combien faudra-t-il en moyenne d'itérations pour tenter de trouver un élément qui n'existe pas dans le vecteur ?

Pour un vecteur de n éléments, combien faudra-t-il en moyenne d'itérations pour trouver un élément qui existe dans le vecteur ?
