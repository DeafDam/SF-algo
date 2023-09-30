Soit le type structuré date, formé de trois nombres entiers qui indiquent respectivement le jour, le mois et l'année.
type date = structure
	jour, mois, année : entier;
fin;

Si une variable d1 est de type date, alors d1.jour, d1.mois et d1.année sont des entiers donnant respectivement le jour, le mois et l'année de d1. Ecrire la fonction permettant de savoir si une date est strictement antérieure à une autre.

Pour représenter le 12/01/2018 on utilisera : 
d.jour := 12; 
d.mois := 1; 
d.année := 2018 


