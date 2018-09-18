```
fonction calculAge(anneeEnCours : entier, anneeNaissance : entier) : entier;
debfonc
  retour anneeEnCours - anneeNaissance;
finfonc;

procedure litEntier(message : chaîne) : entier;
monEntier : entier;
debfonc 
  affiche(message);
  lit(monEntier);
  retour monEntier;
finfonc;

procedure demandeEtAfficheAge(nom : chaîne, anneeEnCours : entier)
nom : chaîne;
anneeNaissance : entier;
debproc
  anneeNaissance := litEntier('Quelle est l'année de naissance ?');
  affiche(nom + ' a ' + calculAge(anneeEnCours, anneeNaissance) + ' ans');
finproc

procedure monProgramme
nom : chaîne;
anneeNaissance, anneeEnCours, nbEnfants, numEnf : entier;
debproc
  affiche('Quel est votre nom ?');
  lit(nom);
  anneeEnCours := litEntier('Quelle est l'année en cours ?');
  demandeEtAfficheAge(nom, anneeEnCours);
  numEnf := 1;
  tantque numeroEnfant <= nbEnfants faire
    demandeEtAfficheAge('Votre enfant numéro ' + numeroEnfant, anneeEnCours);
    numEnf := numEnf + 1;
  finfaire
finproc
```
