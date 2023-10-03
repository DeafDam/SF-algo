Ecrire le même algorithme que dans l'exercice 02 : 
    Ecrire maintenant l'algorithme permettant de demander le nom et l'année de naissance de l'utilisateur. 
    Calculer son age, puis lui demander combien d'enfant il a. 
    Pour chaque enfant, demander son nom et calculer son âge.

Mais en introduisant des procédures et des fonctions pour rendre le code aussi propre et concis que possible, sans duplication. 

nom : chaine;
anneeNaissance, anneeEnCours, nbEnfants : entier;

fonction age(a : entier, b: entier) : entier
debfonc
	age : entier;
	age := b - a;
	si age < 0 alors
		affiche ('Erreur');
		retour 0;
	sinon 
		retour age;
	finsi
finfonc

procedure init()
debproc
	affiche('Quel est ton prénom ?');
	lit(nom);
	affiche('Quelle est ton année de naissance ?');
	lit(anneeNaissance);
	affiche("Quelle est l'année en cours ?");
	lit(anneeEnCours);
	
	affiche(nom + ', tu as ' + age(anneeNaissance, anneeEnCours) + ' ans !');
finproc

procedure chaqueEnfant(nbEnfants) 
debproc
	i : entier;
	i := 1;
	tantque nbEnfants > 0 faire
		affiche('Quel est le prénom de l'enfant n°' + i + ' ?');
		lit(nom);
		affiche('Quelle est l'année de naissance de ' + nom + ' ?');
		lit(anneeNaissance);
		affiche(nom + 'a ' + age(anneeNaissance, anneeEnCours) + ' ans !');
		nbEnfants := nbEnfants - 1;
		i := i + 1;
	finfaire
finproc

init();
affiche('Combien d'enfants as-tu ?');
lit(nbEnfants);
si nbEnfants > 0 alors
	chaqueEnfant(nbEnfants);
finsi;