Exercice 8

Ecrire une fonction prenant en paramètre un vecteur d'entier, et qui renvoie vrai si le vecteur est trié, c'est-à-dire si V[i+1] >= V[i]. Un vecteur vide, ou ne contenant qu'un seul élément est considéré ordonné.

```
fonction estTrie(v : entier[]) : booléen
debfonc
	precedent : entier;
	i : entier;
	si longueur(v) <= 1 alors
		retour vrai;
	sinon
		precedent := v[0];
		i := 1;
	finsi;
	tantque i < longueur(v) faire
		si precedent > v[i] alors
			retour faux;
		finsi;
		precedent := v[i];
		i := i + 1;
	finfaire;
	retour vrai;
finfonc;
```
Variante
```
debfonc
	i : entier;
	pour i := longueur(v) - 1 à 1 faire
		si v[i-1] > v[i] alors
			retour faux;
		finsi;
	finfaire;
	retour vrai;
finfonc;
```
