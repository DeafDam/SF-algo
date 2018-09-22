Soit le type structuré date, formé de trois nombres entiers qui indiquent respectivement le jour, le mois et l'année.
type date = structure
	jour, mois, année : entier;
fin;

Si une variable d1 est de type date, alors d1.jour, d1.mois et d1.année sont des entiers donnant respectivement le jour, le mois et l'année de d1. Ecrire la fonction permettant de savoir si une date est strictement antérieure à une autre.

Pour représenter le 12/01/2018 on utilisera : 
d.jour := 12; 
d.mois := 1; 
d.année := 2018 


```
fonction avant(d1 : date, d2 : date) : booléen
debfonc
	si d1.année < d2.année alors
		retour vrai;
	sinonsi d1.année = d2.année alors
		si d1.mois < d2.mois alors
			retour vrai;
		sinonsi d1.mois = d2.mois alors
			si d1.jours < d2.jours alors
				retour vrai;
			sinon
				retour faux;
			finsi;
		sinon
			retour faux;
		finsi;
	sinon
		retour faux;
	finsi;
finfonc;
```
Variante sans tous les sinons inutiles
```
fonction avant(d1 : date, d2 : date) : booléen
debfonc
	si d1.année < d2.année alors
		retour vrai;
	sinonsi d1.année = d2.année alors
		si d1.mois < d2.mois alors
			retour vrai;
		sinonsi d1.mois = d2.mois alors
			si d1.jours < d2.jours alors
				retour vrai;
			finsi;
		finsi;
	finsi;
	retour faux;
finfonc;
```
Variante en une seule ligne
```
fonction avant(d1 : date, d2 : date) : booléen
debfonc
	retour (d1.année < d2.année) ou (d1.année = d2.année et d1.mois < d2.mois)
	 ou (d1.année = d2.année et d1.mois = d2.mois et d1.jour < d2.jour);
finfonc;
```
