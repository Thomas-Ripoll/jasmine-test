Bonjour Carlos
Dans cet exemple très simple, je vais te montrer comment isoler ton code d'un contexte extérieur.
Si tu ouvres le fichier index.html, tu vois une div qui change sont contenu de "before modification" à "after modification" au bout d'une seconde.
CAD qu'au bout d'une seconde, j'appelle la fonction changeText située dans le fichier src/myscript.js.
La page HTML fonctionne très bien. Par contre ta fonction changeText() à une forte dépendance à document.
Ce qui fait que lorsques tu déclenches un test unitaire sur changeText, il n'a pas le contexte de document qui est propre à une page web. Forcément le test casse.
Pour avoir la solution je t'invite à basculer sur la branche document-aderance-solution: git checkout document-aderance-solution

--------------------------------------------------------------

Pour s'afranchir de cette adérance, tu dois être en mesure d'isoler ton code. 
A l'heure actuelle document est appelé dans la source de ta fonction, ce qui t'empêche de passer par autre chose. 
En l'état, la seule solution qui se présente à toi est de simuler "document" ce qui est souvent fastidieux et révélateur d'un code de mauvaise qualité.

Action: Maintenant ma fonction attend un argument qui correspond au conteneur dans lequel je recherche l'élément à modifier.
J'ai rajouté une vérification de l'argument au début de la fonction changeText dû au caractère non-typé du langage.

maintenant dans le test je commence par créer l'élément conteneur, dans lequel je rajoute l'élément à modifier. Finalement le le transmet à ma fonction. Bingo je peux modifier l'élément, et tester sa modification par le biais du conteneur créé.
