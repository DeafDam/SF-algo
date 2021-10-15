Exercice 7

Ecrire une fonction qui renvoie l'indice d'une valeur passée en paramètre dans un vecteur d'entier trié croissant passé également en paramètre si la valeur est trouvée dans le vecteur. Si la valeur n'est pas trouvée, on renverra -1.


Ecrire un programme qui lit : 

- Nombre d'articles distincts
- TAux TVA

pour chaque article, la quantité et le prix HT 

on affiche le total TTC

```
procedure affichePrixTTC()
debproc
	nbArticles, qte : entier;
	tvTVA, prix, resultat: réel;
	afficher('Nb articles : ');
	lire(nbArticles);
	afficher('Tx TVA: ');
	lire(txTVA);
	resultat := 0;
	tantque nbArticles != 0 faire
		afficher('Qté de l'article ?)
		lire(qte);
		afficher('Prix de l'article ?)
		lire(prix);
		nbArticles := nbArticles - 1;
		resultat := resultat + qte*prix*txTVA;
	finfaire
	afficher('Total TTC : ' + resultat);
finproc
```
