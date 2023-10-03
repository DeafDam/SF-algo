Une boulangerie est ouverte de 7h à 13h et de 16h à 19h, sauf le dimanche après-midi et le lundi toute la journée. 
Ecrire la fonction permettant de savoir si la boulangerie est ouverte.

heure : entier;
jour, opened, closed : chaine;

closed := 'La boulangerie est fermée.';
opened := 'La boulangerie est ouverte.';

affiche('Quel jour est-on?');
lit(jour);

si (jour = 'lundi') alors
	affiche(closed);
sinon 
	affiche('Quelle heure est-il ?');
	lit(heure);
	si (heure < 7 ou (heure > 13 et heure < 16) ou heure > 19) alors
		affiche(closed);
	sinon si (heure >=7 et heure <= 13) alors
		affiche(opened);
	sinon si (jour = dimanche) alors
		affiche(closed);
	sinon
		affiche(opened);
	finsi;
finsi;
