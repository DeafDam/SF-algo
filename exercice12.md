Ecrire une fonction qui prend en paramètre un nombre de départ, et qui calcule sa factorielle.

NB : la factorielle de 8, notee 8!, vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

```
fonction factorielle (nombreSaisi : entier)
resultat, monNombre : entier;
debproc
	monNombre := 1;
	resultat := 1;
	tantque monNombre <= nombreSaisi faire
		resultat := resultat * monNombre
		monNombre := monNombre + 1;
	finfaire
	affiche('La factorielle de ' + nombreSaisi ' est égale à ' + resultat); 
finproc
```
Variante récursive. On définit la fonction factorielle par récurrence de la manière suivante : 
factorielle(1) = 1
factorielle(n) = n * factorielle(n-1);

Par exemple : 
factorielle(3) = 3 * factorielle(2)
factorielle(3) = 3 * 2 * factorielle(1)
factorielle(3) = 3 * 2 * 1

```
fonction factorielle(nombre : entier) : entier
debfonc
	si nombre = 1 alors
		retour 1;
	sinon
		retour nombre * factorielle(nombre - 1);
	finsi
finfonc
```
