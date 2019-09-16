Ecrire une fonction qui remplace toutes les occurrences d'un caractère passé en paramètre d'une phrase passée en paramètre par le caractère '\*'.
remplaceEtoile('o','bonjour') => b\*nj\*ur

On s'aidera de la fonction : 
fonction longueur(c : chaîne) : entier (renvoie la longueur de la chaîne)

Et de la syntaxe : 
chaîne[4] => 5e caractère de la chaîne
chaîne[4] := '\*',

```
procedure remplaceEtoile(caractere : chaîne, phrase : chaîne)
i : entier;
debfonc
	i := 0;
	tantque i < longueur(phrase) faire
		si phrase[i] = caractere alors
			phrase[i] := '*';
		finsi;
		i := i + 1;
	finfaire;
finfonc;
```
