Soit la procédure ci-dessous : 
```
fonction algoPourri(i : entier) : entier
debfonc
  trouvé : booléen;
  j : entier;
  debproc
  	j := i;
  	trouvé := faux;
  	tantque (j <= 25) et non trouvé faire
  		si j = 25 alors
  			trouvé := vrai;
		sinon
			j := j + 1;
		finsi;
	finfaire;
	retour j;
finfonc
```
<table>
  <tr>
    <td>j &gt; 25</td>
    <td>trouvé</td>
    <td>commentaire</td>
  </tr>
  <tr>
    <td>vrai</td>
    <td>vrai</td>
    <td>impossible</td>
  </tr>
  <tr>
    <td>vrai</td>
    <td>faux</td>
    <td>on n'est pas entré dans l'itération</td>
  </tr>
  <tr>
    <td>faux</td>
    <td>vrai</td>
    <td>j = 25</td>
  </tr>
  <tr>
    <td>faux</td>
    <td>faux</td>
    <td>impossible de sortir de l'itération</td>
  </tr>
</table>
 
```
fonction algoMoinsPourri(i : entier) : entier
debfonc
  si i > 25 alors
		retour i;
	sinon
		retour 25;
	finsi;
finfonc;
```
