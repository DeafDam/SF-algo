Exercice 1 :

Ecrire une procédure permettant d'afficher tous les éléments d'un vecteur de chaîne de caractère passé en paramètre, de gauche à droite.

Ecrire une procédure permettant de faire la même chose mais de droite à gauche

```python
procedure parcourir(mot : char[])
debproc
    i : entier;
    i:=0;
	tantque i < longueur(mot) faire
		afficher(mot[i]);
		i := i+1;
	finfaire
finproc

procedure parcourirDaG(mot : char[])
debproc
    i : entier;
    i:= longueur(mot)-1; 
	tantque i >= 0 faire 
		afficher(mot[i]); 
		i := i-1;
	finfaire
finproc

************** OU ******************
//fonction qui marche pour les 2 sens
// 	si sensGaD = vrai alors on fait de gauche à droite
//	si sensGaD = faux alors on fait de droite à gauche

procedure parcourir(v : chaine[], sensGaD : booléen) 
debproc
	i : entier;
	si sensGaD alors
		pour i := 0 à (longueur(v) - 1) faire
			affiche(v[i]);
		finfaire;
	sinon 
		pour i := (longueur(v) - 1) à 0 faire
			affiche(v[i]);
		finfaire;
	finsi;
finproc;
```