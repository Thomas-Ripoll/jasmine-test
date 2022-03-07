Bonjour Carlos
Dans cet exemple très simple, je vais te montrer comment isoler ton code d'un contexte extérieur.
Si tu ouvres le fichier index.html, tu vois une div qui change sont contenu de "before modification" à "after modification" au bout d'une seconde.
CAD qu'au bout d'une seconde, j'appelle la fonction changeText située dans le fichier src/myscript.js.
La page HTML fonctionne très bien. Par contre ta fonction changeText() à une forte dépendance à document.
Ce qui fait que lorsques tu déclenches un test unitaire sur changeText, il n'a pas le contexte de document qui est propre à une page web. Forcément le test casse.
Pour avoir la solution je t'invite à basculer sur la branche document-aderance-solution: git checkout document-aderance-solution