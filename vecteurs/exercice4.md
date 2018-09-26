Exercice 4

Ecrire une fonction retournant la valeur maximum d'un vecteur d'entier passé en paramètre.

```
fonction maxEntier(v : entier[]) : entier
i, max : entier;
debfonc
	si longueur(v) = 0 alors
		retour indéfini;
	sinon 
		max := v[0];
	fin;
	pour i := 1 à longueur(v) - 1 faire
		si max < v[i] alors 
			max := v[i];
		finsi;
	finfaire;
	retour max;
finfonc;
```