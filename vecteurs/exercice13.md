Exercice 13

Ecrire la procédure ecrireSudoku(s : entier[][]) qui affiche correctement le sudoku, ligne par ligne (on n'affichera pas les 0 qu'on remplacera par des espaces). On utilisera la chaîne '\r' pour effectuer un retour à la ligne.

[[0, 8, 0, 4, 0, 2, 0, 6, 0],[0, 3, 4, 0, 0, 0, 9, 1, 0], ...]

donnera

  8   4   2   6  
  3 4       9 1  
9 6           8 4
      2 1 6      
                 
      3 5 7      
8 4           7 5
  2 6       1 3  
  9   7   1   4  

```
procedure ecrireSudoku(s : entier[][])
i, j : entier;
debproc
i := 0;
	tantque i < longueur(s) faire
	j := 0;
		tantque j < longueur(s[i]) faire
			si s[i][j] = 0 alors
				affiche(' ');
			sinon
				affiche(s[i][j]);
			finsi;
			j := j + 1;
		finfaire
		affiche('\n');
		i := i + 1;
	finfaire
finproc
```

Bonus : on pourra essayer d'afficher le sudoku de cette manière : 

[[0, 8, 0, 4, 0, 2, 0, 6, 0],[0, 3, 4, 0, 0, 0, 9, 1, 0], ...]

donnera

 -----------------------
|   8   | 4   2 |   6   |
|   3 4 |       | 9 1   |
| 9 6   |       |   8 4 |
 -----------------------
|       | 2 1 6 |       |
|       |       |       |
|       | 3 5 7 |       |
 -----------------------
| 8 4   |       |   7 5 |
|   2 6 |       | 1 3   |
|   9   | 7   1 |   4   |
 -----------------------