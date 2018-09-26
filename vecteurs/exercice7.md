Exercice 7

Ecrire une fonction qui renvoie l'indice d'une valeur passée en paramètre dans un vecteur d'entier trié croissant passé également en paramètre si la valeur est trouvée dans le vecteur. Si la valeur n'est pas trouvée, on renverra -1.


Ecrire un programme qui lit : 

- Nombre d'articles distincts
- TAux TVA

pour chaque article, la quantité et le prix HT 

on affiche le total TTC

ind := indiceMin(v)

procedure affichePrixTTC()
debproc
	nbArticles, qte : entier;
	tvTVA, prix, resultat: réel;
	affiche('Nb articles : ');
	lit(nbArticles);
	affiche('Tx TVA: ');
	lit(txTVA);
	resultat := 0;
	tantque nbArticles != 0 faire
		affiche('Qté de l'article ?)
		lit(qte);
		affiche('Prix de l'article ?)
		lit(prix);
		nbArticles := nbArticles - 1;
		resultat := resultat + qte*prix*txTVA;
	finfaire
	affiche('Total TTC : ' + resultat);
finproc

fonction carre(n : entier) : entier
debfonc
	retour n*n;
finfonc;

nbElem := carre(4);
nbEleme

procedure afficheCarre(n : entier)
depbroc
	affiche('Carré de ' + n + ' : ' + carre(carre(2)))
finproc

carre(2)

