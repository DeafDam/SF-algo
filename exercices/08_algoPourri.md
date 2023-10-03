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

i = 25 => algoPourri(25) = 25
i = 20 => algoPourri(20) = 25
i = 30 => algoPourri(30) = 30

fonction algoParfait(i : entier) : entier
debfonc
	si i < 25 alors
		retour 25;
	finsi;
	retour i;
finfonc;