Ecrire la fonction permettant de renvoyer le minimum entre deux nombres 

```
fonction min2(a : entier, b : entier) : entier
debfonc
	si a < b alors
		retour a;
	finsi
	retour b;
finfonc
```

```
fonction min2(a : entier, b : entier) : entier
debfonc
	si a = b alors
		affiche('Les nombres sont équivalents');
	sinonsi a < b alors
		retour a;
	finsi
	retour b;
finfonc
```

