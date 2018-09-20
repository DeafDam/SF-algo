Ecrire une procédure qui demande un nombre de depart, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15 
NB : on souhaite afficher uniquement le resultat, pas la decomposition du calcul.


```
procedure sommeNombre
nombreSaisi, resultat, monNombre : entier;
debproc
	affiche('Entrer un nombre entier positif');
	lit(nombreSaisi);
	monNombre := 1;
	resultat := 0;
	tantque monNombre <= nombreSaisi faire
		resultat := resultat + monNombre
		monNombre := monNombre + 1;
	finfaire
	affiche('La somme de 1 à ' + nombreSaisi ' est égale à ' + resultat); 
finproc
```
Variante
```
procedure sommeNombre
nombreSaisi, resultat, monNombre : entier;
debproc
	affiche('Entrer un nombre entier positif');
	lit(nombreSaisi);
	monNombre := nombreSaisi;
	resultat := 0;
	tantque monNombre > 0 faire
		resultat := resultat + monNombre
		monNombre := monNombre - 1;
	finfaire
	affiche('La somme de 1 à ' + nombreSaisi ' est égale à ' + resultat); 
finproc
```
