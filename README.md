## Tâches à Réaliser

Ce repository contient des exercices pour ce familiariser avec Mongo DB. Vous pouvez travailler localement ou dans codespace afin de compléter les différents fichiers.

### Livrables
Compléter les scripts dans les dossiers "exercices" en présentant les requêtes exécutées et les résultats obtenus.

### Configurer votre environnement de travail
Pour vous connecter à la base MongoDB, vous devez **installer mongosh (localement ou sur codespace)**. 
#### Localement
Vous pouvez pull le repertoire github sur votre ordinateur.
Vous devez installer le shell mongodb : https://www.mongodb.com/docs/mongodb-shell/install/
Ensuite, connectez-vous via la commande suivante : 
```
mongosh "mongodb+srv://mogodb-exercices.ryzdfqo.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509" --apiVersion 1 --tls --tlsCertificateKeyFile <Chemin jusqu'au certificat>
```
#### Sur codespace
Une fois, codespace ouvert, vous devez configurer votre environnement pour Node.js et MongoDB, pour ça vous pouvez suivre la vidéo suivante : https://www.youtube.com/watch?v=ocPOHZJ21jE **(à partir de 2:55 et jusqu'à 6:30)**.
Une fois l'environnement configuré, la connexion se fera par la commande : 
```
mongosh "mongodb+srv://mogodb-exercices.ryzdfqo.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509" --apiVersion 1 --tls --tlsCertificateKeyFile certificate/X509-cert-3577133840817941091.pem```
```

### Exercices
Une fois connecté, complétez les fichier correspondants aux exercices en **explorant les BDDs via le shell.**
Vous pouvez inscrire vous réponses directement dans les script js, les question sont en commentaires.
1. **Exercice 0 - Familiarisez vous avec la bdd**
2. **Exercice 1 - find, insert, update, remove** 
3. **Exercice 2 - aggregate** 
4. **Exercice 3 - map, reduce** 

