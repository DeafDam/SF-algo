Ecrire le même algorithme que dans l'exercice précédent mais en introduisant des procédures et des fonctions pour rendre le code aussi propre et concis que possible, sans duplication. 

```
nom : chaîne;
anneeNaissance, anneeEnCours, nbEnfants, numEnf : entier;
affiche('Quel est votre nom ?');
lit(nom);
affiche('Quelle est votre année de naissance ?');
lit(anneeNaissance);
anneeEnCours := litEntier('Quelle est l'année en cours ?');
demandeEtAfficheAge(nom, anneeEnCours);
nbEnfants := litEntier(nom + ', combien avez vous d'enfants ?');
numEnf := 1;
tantque numeroEnfant <= nbEnfants faire
  demandeEtAfficheAge('Votre enfant numéro ' + numeroEnfant, anneeEnCours);
  numEnf := numEnf + 1;
finfaire

procedure demandeEtAfficheAge(nom : chaîne, anneeEnCours : entier)
nom : chaîne;
anneeNaissance : entier;
debproc
  anneeNaissance := litEntier('Quelle est l'année de naissance ?');
  affiche(nom + ' a ' + calculAge(anneeEnCours, anneeNaissance) + ' ans');
finproc

fonction litEntier(message : chaîne) : entier;
monEntier : entier;
debfonc 
  affiche(message);
  lit(monEntier);
  retour monEntier;
finfonc;

fonction calculAge(anneeEnCours : entier, anneeNaissance : entier) : entier
debfonc
  si anneeCorrecte(anneeEnCours) et anneeCorrecte(anneeNaissance) alors
      si anneeEnCours >= anneeNaissance alors
        retour anneeEnCours - anneeNaissance;
      finsi;
      affiche('Il est impossible qu'une personne soit née après ' + anneeEnCours);

  finsi;
  affiche('Une des deux années renseignées est incorrecte !');
  retour -1;
finfonc

fonction anneeCorrecte(annee : entier) : booléen
debfonc
	retour annee > 1900 ;
finfonc
```
