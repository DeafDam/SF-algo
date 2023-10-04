Exercice 5 

Ecrire une fonction prenant en paramètre un vecteur d'entier et un entier, et qui retourne vrai si la valeur existe dans le vecteur et faux sinon. On considère que le vecteur contient des valeurs uniques et n'est pas trié.

Q1: Pour un vecteur de n éléments, combien faudra-t-il exactement d'itérations pour tenter de trouver un élément qui n'existe pas dans le vecteur ?

Q2: Pour un vecteur de n éléments, combien faudra-t-il en moyenne d'itérations pour trouver un élément qui existe dans le vecteur ?


```python
fonction Trouve(nb : entier, vEntiers : entier[]) : booléen
debfonc
	i : entier;
	pour i := 0 à (longueur(vEntiers) - 1) faire
		si vEntiers[i] = nb alors
			retour vrai;
		finsi;
	finfaire;
	retour faux;
finfonc;

Q1 : n iterations
Q2 : n/2 iterations (fonction retourne vraie dès qu il a trouvé)
```