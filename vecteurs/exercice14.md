Exercice 14

Ecrure la fonction estAutorise qui vérifie si un chiffre est autorisé à la position x,y dans un sudoku en appliquant les règles suivantes : 

- 1 : Si la valeur est déjà dans la ligne, le chiffre n'est pas autorisé
- 2 : Si le valeur est déjà dans la colone, le chiffre n'est pas autorisé
- 3 : Si la valeur est est déjà dans la boite, le chiffre n'est pas autorisé	

fonction estAutorise(x : entier, y : entier, chiffre : entier, sudoku : entier[][]) : booléen

```
fonction estAutorise(x : entier, y : entier, chiffre : entier, sudoku : entier[][]) : booléen
debfonc
	i, j, decalageI, decalageY : entier;
	j := 0;
	tantque j < longueur(sudoku[x]) faire
		si sudoku[x][j] = chiffre alors
			retour faux;
		finsi;
		j := j + 1;
	finfaire;

	i := 0;
	tantque i < longueur(sudoku) faire
		si sudoku[i][y] = chiffre alors
			retour faux;
		finsi;
		i := i + 1;
	finfaire;

	decalageI := (x / 3) * 3;
	decalageY := (y / 3) * 3;
	i := 0;
	j := 0;
	tantque i < 3 faire
		tantque j < 3 faire
			si chiffre = sudoku[decalageI+i][decalageY+j] alors
				retour faux;
			finsi;
			j := j + 1;
		finfaire
		i := i+1;
	finfaire;
finfonc;
```