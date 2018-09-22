Ecrire une fonction qui retourne un nombre compris entre 5 et 10,jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 10, on fera apparaitre un message : 'Plus petit !', et inversement, 'Plus grand !'' si le nombre est inférieur à 5.

```
fonction nombreEntre5et10() : entier
nombre : entier;
nombreOk : booléen;
debfonc
	nombreOK := faux;
	tantque nombreOK = faux faire
		 affiche('Entrer un nombre entre 5 et 10');
		 lit(nombre);
		 si nombre > 10 alors
		 	affiche('Plus petit !');
		 sinon si nombre < 5 alors
		  	affiche('Plus grand !');
		 sinon
		 	nombreOk := vrai;
		 finsi;
	finfaire
	retour nombre;
finfonc
```
Variante avec boucle infinie
```
fonction nombreEntre5et10() : entier
nombre : entier;
debfonc
	tantque vrai faire
		 affiche('Entrer un nombre entre 5 et 10');
		 lit(nombre);
		 si nombre > 10 alors
		 	affiche('Plus petit !');
		 sinon si nombre < 5 alors
		  	affiche('Plus grand !');
		 sinon
		 	retour nombre;
		 finsi;
	finfaire
finfonc
```