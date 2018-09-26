Exercice 11

Ecrire la procédure triPermutation(v : entier[]) qui trie dans l'ordre croissant par permutation le vecteur passé en paramètre.

```
triPermutation(v : entier[])
debproc
indMin, i : entier;
	i := 0;
	tantque i < longueur(v) - 1 faire
		indMin := indiceMin(v, i);
		si indMin != i alors
			tmp := v[i];
			v[i] := v[indMin];
			v[indMin] := tmp;
		finsi;
		i := i + 1;
	finfaire;
finproc;
```