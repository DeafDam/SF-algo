Exercice 2 : 

Ecrire une fonction retournant la somme de tous les éléments d'un vecteur d'entiers passé en paramètre. 

```
fonction sommeVecteur(v : entier[]) : entier
i, somme : entier;
debfonc
	i := 0;
	somme := 0;
	tanque i < longueur(v) faire
		somme := somme + v[i];
		i := i + 1;
	finfaire

	retour somme;

finfonc;
```

Ecrire une fonction retournant la somme d'un élément sur deux d'un vecteur d'entiers passé en paramètre. 
[4,6,7,9,3] => 4+7+3 = 14.

```
fonction sommeVecteur1sur2(v : entier[]) : entier
i, somme : entier;
debfonc
	i := 0;
	somme := 0;
	tanque i < longueur(v) faire
		somme := somme + v[i];
		i := i + 2;
	finfaire

	retour somme;

finfonc;
```