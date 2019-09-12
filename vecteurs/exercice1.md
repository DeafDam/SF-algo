Exercice 1 :

Ecrire une procédure permettant d'afficher tous les éléments d'un vecteur de chaîne de caractère passé en paramètre, de gauche à droite.

```
procédure afficheVecteur(v : chaîne[])
i : entier;
debproc
	i := 0;
	tantque i < longueur(v) faire
		affiche(v[i]);
		i := i + 1;
	finfaire;
finproc;
```
Variante
```
procédure afficheVecteur(v : chaîne[])
i : entier;
debproc
	pour i := 0 à longueur(v) - 1 faire
		affiche(v[i]);
	finfaire;
finproc;
```

Ecrire une procédure permettant de faire la même chose mais de droite à gauche

```
procédure afficheVecteur(v : chaîne[])
i : entier;
debproc
	i := longueur(v) - 1;
	tantque i >= 0 faire
		affiche(v[i]);
		i := i - 1;
	finfaire;
finproc;
```
Variante
```
procédure afficheVecteur(v : chaîne[])
i : entier;
debproc
	pour i := longueur(v) - 1 à 0 faire
		affiche(v[i]);
	finfaire;
finproc;
```
