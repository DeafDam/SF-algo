Exercice 16

Ecrire la procédure suppression(v : entier[], element : entier) permettant de supprimer l'élément passé en paramètre dans le vecteur v si c'est possible. Le vecteur n'est pas trié et ne contient que des entiers distincts.

```
procédure suppression(v : entier[], element : entier)
debproc
	i : entier;
	i := 0;
	tantque i < longueur(v) et v[i] != element faire
		i := i + 1;
	finfaire;
	si i != longueur(v) alors 
		v[i] := indéfini;
	finsi;
finproc
```

Ecrire la procédure suppressiontrié(v : entier[], element : entier) qui fait la même chose mais avec un vecteur trié.

```
procédure suppression(v : entier[], element : entier)
debproc
	i : entier;
	i := 0;
	tantque i < longueur(v) et v[i] < element faire
		i := i + 1;
	finfaire;
	si i != longueur(v) et v[i] = element alors 
		v[i] := indéfini;
	finsi;
finproc
```

