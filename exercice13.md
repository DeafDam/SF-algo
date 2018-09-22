Calculer la remise de monnaie qu'un commerçant doit à un client avec la fonction suivante (les montants sont entiers, et on calcule la remise avec des billets de 10€, des billets de 5€ et des pièces de 1 €): 

```
procedure remiseMonnaie(montantDu : entier, montantVersé : entier)
reste, nbrB10, nbrB5, nbrP1 :  entier;
debproc
	si montantVersé < montantDu alors
		affiche('Il manque des sous !');
	sinon
		reste := montantVersé - montantDu;
		nbrB10 := reste / 10;
		reste = reste mod 10;
		nbrB5 := reste / 5;
		nbrP1 := reste mod 5;
		affiche('Vous devez rendre ' + nbrB10 + ' billets de 10');
		affiche('Vous devez rendre ' + nbrB5 + ' billets de 5');
		affiche('Vous devez rendre ' + nbrP1 + ' pièces de 1');
	finsi;
finproc;
```
Variante sans modulo
```
procedure remiseMonnaie(montantDu : entier, montantVersé : entier)
reste, nbrB10, nbrB5, nbrP1 :  entier;
debproc
	nbrB10 := 0;
	nbrB5 := 0;
	nbrP1 := 0;
	reste := montantVersé - montantDu;
	tantque reste >= 10 faire
		reste := reste - 10;
		nbrB10 := nbrB10 + 1;
	finfaire;
	tantque reste >= 5 faire
		reste := reste - 5;
		nbrB5 := nbrB5 + 1;
	finfaire;
	nbrP1 := reste;
	affiche('Vous devez rendre ' + nbrB10 + ' billets de 10');
	affiche('Vous devez rendre ' + nbrB5 + ' billets de 5');
	affiche('Vous devez rendre ' + nbrP1 + ' pièces de 1');
	finsi;
finproc;
```