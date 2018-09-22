Ecrire une procédure qui met en majuscule toutes les premières lettres des mots d'une phrase passée en paramètre.
procédure majusculeMot(phrase : chaîne) 

On s'aidera de :
fonction majuscule(c : chaîne) : chaîne (renvoie le caractère passé en paramètre en majuscule).
majuscule('a') => 'A' 

```
procédure majusculeMot(phrase : chaîne) 
procLettreMaj : booléen;
i : entier;
debproc
	i := 0;
	procLettreMaj := vrai;
	tantque i < longueur(phrase) faire
		si procLettreMaj et phrase[i] != ' ' alors
			phrase[i] := majuscule(phrase[i]);
			procLettreMaj := faux;
		sinonsi phrase[i] = ' ' alors
			procLettreMaj := vrai;
		finsi;
		i := i + 1;
	finfaire;
finproc
```

```
procédure majusculeMot(phrase : chaîne) 
i : entier;
debproc
	i := 1;
	si longueur(phrase) > 0 alors
        phrase[0] := majuscule(phrase[0]);
    finsi
	tantque i < longueur(phrase) faire
		si phrase[i-1] =  ' ' et phrase[i] != ' ' alors
			phrase[i] := majuscule(phrase[i]);
		finsi;
		i := i + 1;
	finfaire;
finproc
```