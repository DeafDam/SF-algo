Exercice 10

Ecrire la fonction triRemplacement(v : entier[]) : entier[] qui trie dans l'ordre croissant par remplacement le vecteur passé en paramètre.

```
fonction triRemplacement(v : entier[]) : entier[]
max, i, indMin : entier
debfonc
	vTrié : entier[];
	vTrié := entier[longueur(v)];
	max := maximum(v);
	tantque i < longueur(v) faire
		indMin := indiceMin(v);
		vTrié[i] := v[indMin];
		v[indMin] := max;
		i := i + 1;
	finfaire;
	retour vTrié;
finfonc
```