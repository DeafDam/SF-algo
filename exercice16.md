Ecrire une fonction qui renvoie vrai si une chaîne de caractère (passée en paramètre) est présente dans une autre chaîne (passée également en paramètre).

```
fonction cherche(aiguille : chaine, botteDeFoin : chaine) : booléen
i,j : entier;
debfonc
    i := 0;
    tantque i < longueur(botteDeFoin) faire
        si botteDeFoin[i] != aiguille[0] alors
            i := i + 1;
        sinon
            j := 0;
            tantque i < longueur(botteDeFoin) et j < longueur(aiguille) et botteDeFoin[i] = aiguille[j] faire
                i := i + 1;
                j := j + 1;
            finfaire;
            si j = longueur(aiguille) alors
                retour vrai;
            finsi;
            retour faux;
        finsi;
    finfaire;
    retour faux;
finfonc
```