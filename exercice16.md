Ecrire une fonction qui renvoie vrai si une chaîne de caractère (passée en paramètre) est présente dans une autre chaîne (passée également en paramètre).

```
public boolean cherche(char[] aiguille, char[] botteDeFoin) {
        int i = 0;
        while(i < botteDeFoin.length){
            if(botteDeFoin[i] != aiguille[0]){
                i++;
            } else {
                int j = 0;
                while (i < botteDeFoin.length && j < aiguille.length && botteDeFoin[i] == aiguille[j]){
                    i++;
                    j++;
                }
                if(j == aiguille.length){
                    return true;
                }
                return false;
            }
        }
        return false;
    }
```