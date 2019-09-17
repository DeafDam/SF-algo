Ecrire une fonction qui renvoie vrai si une chaîne de caractère (passée en paramètre) est présente dans une autre chaîne (passée également en paramètre).

```
fonction cherche(aiguille : chaine, botteDeFoin : chaine) : booléen
i,j : entier;
debfonc
    i := 0;
    j := 0;
    tantque i < longueur(botteDeFoin) et j < longueur(aiguille) faire
        si botteDeFoin[i] = aiguille[j] alors
            j := j + 1;
        sinon
            i := i - j;
            j := 0;
        finsi;
        i := i + 1;
    finfaire;
    si j = longueur(aiguille) alors
        retour vrai;
    finsi;
    retour faux;
finfonc;
```
