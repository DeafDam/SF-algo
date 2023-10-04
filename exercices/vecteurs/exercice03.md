Exercice 3

Ecrire une fonction retournant le nombre d'occurences d'un caractère passé en paramètre dans un vecteur de chaîne de caractère passé en paramètre. 

```python
//méthode avec "pour ... à ... faire"
fonction nbOccurences(c : chaine, v: chaine[]) : entier
debfonc
	i, nbOcc : entier;
    nbOcc := 0;
	pour i := 0 à (longueur(v) - 1) faire
		si v[i] = c alors
			nbOcc := nbOcc + 1;
		finsi;
	finfaire;
	retour nbOcc;
finfonc;

************** OU ******************
// méthode avec "tant que ... faire"
fonction nbOccurences(c : chaine, v: chaine[]) : entier
debfonc
	i, nbOcc : entier;
    i := 0;
	nbOcc := 0;
	tant que i à (longueur(v) - 1) faire
		si v[i] = c alors
			nbOcc := nbOcc + 1;
		finsi;
        i:=i+1;
	finfaire;
	retour nbOcc;
finfonc;
```