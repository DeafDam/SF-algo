Une boulangerie est ouverte de 7h à 13h et de 16h à 19h, sauf le dimanche après-midi et le lundi toute la journée. Ecrire la fonction permettant de savoir si la boulangerie est ouverte : 
```
jourActuel : chaîne;
heureActuelle : entier;
affiche("Quel jour sommes-nous ?"); lit(jourActuel);
affiche("Quelle heure est-il ?"); lit(heureActuelle);
si boulangerieOverte(heureActuelle, jourActuel) alors
  affiche('La boulangerie est ouverte !');
 sinon
   affiche('La boulangerie est fermée !');
 finsi;
```
Variante 
```
fonction boulangerieOuverte(heure : entier, jour : chaîne) : booléen
debfonc
  si jour = 'lundi' alors
    retour faux;
  sinonsi jour = 'dimanche' alors
  	si (heure < 7) ou (heure > 13) alors
  	  retour faux;
  	sinon
  	  retour vrai;
  	finsi;
  sinonsi (heure < 7) ou ((heure > 13 et heure < 16) ou heure > 19) alors
    retour faux;
  sinon
    retour vrai;
  finsi;
finfonc
```
Variante
```
fonction boulangerieOuverte(heure : entier, jour : chaîne) : booléen
debfonc
	ouvert : booléen;
	ouvert := faux;
	si jour != 'lundi' et heure >= 7 et heure < 13 alors
		ouvert := vrai;
	sinonsi jour != 'dimanche' et jour != 'lundi' et heure >= 16 et heure < 19 alors
		ouvert:= vrai;
	finsi;
	retour ouvert;
finfonc
```
Variante en une ligne

```
fonction boulangerieOuverte(heure : entier, jour : chaîne) : booléen
debfonc
	retour (jour != 'lundi' et heure >= 7 et heure < 13) 
  ou (jour != 'dimanche' et jour != 'lundi' et heure >= 16 et heure < 19);
finfonc;
```
