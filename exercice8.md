Ecrire la fonction permettant de renvoyer le minimum entre trois nombres 

```
fonction min3(a : entier, b : entier c : entier) : entier
debfonc

	si min2(a,b) > c alors
		retour c;
	sinon
		retour min2(a,b);
	finsi;
finfonc;
```
Variante sans le sinon inutile
```
fonction min3(a : entier, b : entier c : entier) : entier
debfonc
	si min2(a,b) > c alors
		retour c;
	finsi;
	retour min2(a,b);
```
Variante sans double appel à la fonction min2

```
fonction min3(a : entier, b : entier c : entier) : entier
debfonc	
	min := min2(a,b);
	si min > c alors
		retour c;
	finsi;
	retour min;
```
Variante en une seul ligne
```
fonction min3(a : entier, b : entier c : entier) : entier
debfonc	
	retour min2( min2(a,b), c);
finfonc;
```
Variante sans utiliser min2
```
fonction min3(a : entier, b : entier c : entier) : entier
debfonc
	si a < b et a < c
		retour a;
	sinon si b < c et b < a 
		retour b;
	sinon
		retour c;
	finsi
finfonc;
```