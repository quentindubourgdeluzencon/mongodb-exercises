## Tâches à Réaliser

Ce dépôt contient des exercices pour se familiariser avec MongoDB. Vous pouvez travailler localement ou dans Codespace pour compléter les différents fichiers.

### Livrables
Complétez les scripts dans les dossiers "exercices" en présentant les requêtes exécutées et les résultats obtenus.

### Configurer votre environnement de travail
Pour vous connecter à la base MongoDB, vous devez **installer mongosh (localement ou sur Codespace)**.

#### Localement
- Clonez le dépôt GitHub sur votre ordinateur.
- Vous devez installer le shell MongoDB : [Guide d'installation](https://www.mongodb.com/docs/mongodb-shell/install/).
- Ensuite, connectez-vous via la commande suivante :
  ```bash
  mongosh "mongodb+srv://mogodb-exercices.ryzdfqo.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509" --apiVersion 1 --tls --tlsCertificateKeyFile <Chemin jusqu'au certificat>
  ```
#### Sur Codespace
- Une fois Codespace ouvert, vous devez configurer votre environnement pour Node.js et MongoDB. Pour cela, suivez la vidéo suivante : [Configuration de l'environnement Codespace](https://www.youtube.com/watch?v=ocPOHZJ21jE) **(de 2:55 à 6:30)**.
- Une fois l'environnement configuré, la connexion se fera avec la commande :
  ```bash
  mongosh "mongodb+srv://mogodb-exercices.ryzdfqo.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509" --apiVersion 1 --tls --tlsCertificateKeyFile certificate/X509-cert-3577133840817941091.pem
  ```


### Exercices

Une fois connecté, complétez les fichiers correspondants aux exercices en **explorant les bases de données via le shell**. Vous pouvez inscrire vos réponses directement dans les scripts js ; les questions sont en commentaires.

1. **Exercice 0 - Familiarisez-vous avec la base de données**
2. **Exercice 1 - find, insert, update, remove**
3. **Exercice 2 - aggregate**
4. **Exercice 3 - map, reduce**
