Exercice 3

Ecrire une fonction retournant le nombre d'occurences d'une chaîne de caractères dans un vecteur de chaîne de caractère passé en paramètre. 

```
fonction nbOccurrenceChaine(v : chaîne[], cherche : chaîne) : entier
i, nbOcc : entier;
debfonc
	nbOcc := 0;
	pour i := 0 à longueur(v) - 1 faire
		si cherche = v[i] alors 
			nbOcc := nbOcc + 1;
		finsi;
	finfaire;
	retour nbOcc;
finfonc
```