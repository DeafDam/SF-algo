Une année est bissextile si son millésime est multiple de 4, sauf les années de début de siècle qui ne sont bissextiles que si leur millésime est divisible par 400. Ecrire la fonction permettant de savoir si une année est bissextile : 

Pour savoir si a est divisible par b on peut utiliser l'opérateur mod (pour modulo)

Le modulo est le reste de la division entière.

4 mod 2 => 0

5 mod 3 => 2

1504 mod 3 => 3 * 501 + 1

Wikipédia : une année est bissextile si l'année est divisible par 4 et non divisible par 100, ou
si l'année est divisible par 400.

```
fonction bissextile(annee : entier) : booléen
debfonc
  si annee mod 4 != 0 alors
    retour faux;
  sinonsi annee mod 100 = 0 et annee mod 400 != 0
    retour faux;
  sinon
    retour vrai;
  finsi;
finfonc;
```
```
fonction bissextile(annee : entier) : booléen
debfonc
  retour annee mod 4 = 0 et (annee mod 100 != 0 ou annee mod 400 = 0);
finfonc;
```

