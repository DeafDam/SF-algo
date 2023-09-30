Soit la procédure ci-dessous : 
```
fonction algoPourri(i : entier) : entier
debfonc
  trouvé : booléen;
  j : entier;
  debproc
  	j := i;
  	trouvé := faux;
  	tantque (j <= 25) et non trouvé faire
  		si j = 25 alors
  			trouvé := vrai;
		sinon
			j := j + 1;
		finsi;
	finfaire;
	retour j;
finfonc
```

Pourquoi est-il pourri ? Quelles sont les résultats obtenus selon plusieurs valeurs de i ?
Comment faire un meilleur algorithme pour les mêmes résultats ?