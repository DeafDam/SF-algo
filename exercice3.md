Ecrire le même algorithme que dans l'exercice précédent mais en introduisant des procédures et des fonctions pour rendre le code aussi propre et concis que possible, sans duplication. 

```
nom : chaîne;
anneeNaissance, anneeEnCours, nbEnfants, numEnf : entier;
afficher('Quel est votre nom ?');
lire(nom);
afficher('Quelle est votre année de naissance ?');
lire(anneeNaissance);
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
  afficher(nom + ' a ' + calculAge(anneeEnCours, anneeNaissance) + ' ans');
finproc

fonction litEntier(message : chaîne) : entier;
monEntier : entier;
debfonc 
  afficher(message);
  lire(monEntier);
  retour monEntier;
finfonc;

fonction calculAge(anneeEnCours : entier, anneeNaissance : entier) : entier
debfonc
  si anneeCorrecte(anneeEnCours) et anneeCorrecte(anneeNaissance) alors
      si anneeEnCours >= anneeNaissance alors
        retour anneeEnCours - anneeNaissance;
      finsi;
      afficher('Il est impossible qu'une personne soit née après ' + anneeEnCours);

  finsi;
  afficher('Une des deux années renseignées est incorrecte !');
  retour -1;
finfonc

fonction anneeCorrecte(annee : entier) : booléen
debfonc
	retour annee > 1900 ;
finfonc
```
