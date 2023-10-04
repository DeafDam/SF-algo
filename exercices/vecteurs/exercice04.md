Exercice 4

Ecrire une fonction retournant la valeur maximum d'un vecteur d'entier passé en paramètre.


```python
fonction maxEntiers(vEntiers: entier[]) : entier;
debfonc
	i, max : entier;
	si longueur(vEntiers) > 0 alors
		max := vEntiers[0];
	sinon 
		affiche ('erreur');		
		retour 0;
	finsi;

	pour i := 1 à (longueur(vEntiers) -1) faire
		si vEntiers[i] > max alors
			max := vEntiers[i];
		finsi;
	finfaire;
	retour max;
finfonc;
```
