Exercice 5 

Ecrire une fonction prenant en paramètre un vecteur d'entier et un entier, et qui retourne vrai si la valeur existe dans le vecteur et faux sinon. On considère que le vecteur contient des valeurs uniques et n'est pas trié.

```
fonction trouveEntier(v : entier[], nb : entier) : booléen
debfonc
	i : entier;
	pour i := 0 à longueur(v) - 1 faire
		si nb = v[i] alors
			retour vrai;
		finsi;
	finfaire;
	retour faux;
finfonc
```
Variante
```
fonction trouveEntier(v : entier[], nb : entier) : booléen
debfonc
	i : entier;
	i := 0;
	tantque i < à longueur(v) faire
		si nb = v[i] alors
			retour vrai;
		finsi;
		i := i + 1;
	finfaire;
	retour faux;
finfonc
```

Pour un vecteur de n éléments, combien faudra-t-il exactement d'itérations pour tenter de trouver un élément qui n'existe pas dans le vecteur ?

n

Pour un vecteur de n éléments, combien faudra-t-il en moyenne d'itérations pour trouver un élément qui existe dans le vecteur ?

n/2