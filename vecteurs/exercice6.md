Exercice 6

Ecrire une fonction qui renvoie l'indice d'une valeur passée en paramètre dans un vecteur d'entier passé également en paramètre si la valeur est trouvée dans le vecteur. Si la valeur n'est pas trouvée, on renverra -1.

```
fonction indiceEntier(v : entier[], nb : entier) : entier
debfonc
	i : entier;
	i := 0;
	tantque i < à longueur(v) faire
		si nb = v[i] alors
			retour i;
		finsi;
		i := i + 1;
	finfaire;
	retour -1;
finfonc;
```

```
fonction tousLesIndicesEntier(v : entier[], nb : entier) : entier[]
debfonc
	i,j : entier;
	tabIndices : entier[];
	tabIndices := entier[longueur(v)];
	i := 0;
	j := 0;
	tantque i < à longueur(v) faire
		si nb = v[i] alors
			tabIndices[j] := i;
			j := j + 1;
		finsi;
		i := i + 1;
	finfaire;
	retour tabIndices;
finfonc;
```

```
fonction dernierIndiceEntier(v : entier[]) : entier
debfonc
	i : entier;
	i := 0;
	tantque i < à longueur(v) faire
		si nb = v[i] alors
			retour i;
		finsi;
		i := i + 1;
	finfaire;
	retour -1;
finfonc;
```
