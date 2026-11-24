# Rendez-vous & formations — mise en place de la Google Sheet

Une seule feuille Google reçoit tout, dans deux onglets créés automatiquement :

| Onglet | Rempli par | Colonnes |
|---|---|---|
| **Rendez-vous** | le formulaire « Réservez en une minute » de l'accueil | Date de la demande · Nom · Téléphone · Vous êtes · Séance · Date souhaitée · Créneau · Statut |
| **Inscriptions** | le formulaire d'inscription de la page Formations | Date · Formation · Session · Nom · Téléphone · E-mail · Profession · Message · Statut |

Temps nécessaire : environ 10 minutes, une seule fois.

## 1. Créer la feuille
1. Allez sur https://sheets.google.com avec le compte Google du centre.
2. Créez une feuille vierge et nommez-la **Pôle Assala — Rendez-vous & formations**.

## 2. Coller le script
1. Dans la feuille : menu **Extensions → Apps Script**.
2. Supprimez le code présent, puis collez tout le contenu du fichier `google-apps-script.gs`.
3. (Optionnel) Pour recevoir un e-mail à chaque demande, mettez votre adresse dans
   `const NOTIFY_EMAIL = '';` en haut du script.
4. Cliquez sur l'icône **Enregistrer** (disquette).

## 3. Publier le script
1. En haut à droite : **Déployer → Nouveau déploiement**.
2. Roue dentée à côté de « Sélectionner le type » → **Application Web**.
3. Réglages :
   - Exécuter en tant que : **Moi**
   - Qui peut accéder : **Tout le monde**
4. **Déployer** → autorisez l'accès avec votre compte Google
   (si Google affiche « Application non validée » : *Paramètres avancés → Accéder au projet*).
5. Copiez l'**URL de l'application Web** (elle se termine par `/exec`).

## 4. Brancher le site
Ouvrez `site-data.js` et collez l'URL :

```js
sheetUrl: 'https://script.google.com/macros/s/XXXXXXXX/exec'
```

Profitez-en pour mettre le vrai numéro WhatsApp dans `whatsapp:` (format 2135XXXXXXXX).
Puis republiez le site.

## 5. Tester
1. Sur l'accueil, faites une fausse demande de rendez-vous → une ligne apparaît dans l'onglet **Rendez-vous**.
2. Sur la page Formations, inscrivez-vous avec un faux nom → une ligne apparaît dans l'onglet **Inscriptions**.

Les onglets n'apparaissent qu'au premier envoi : c'est normal qu'ils n'existent pas avant le test.

## Vous aviez déjà publié l'ancien script (formations uniquement) ?
Remplacez le code par le nouveau `google-apps-script.gs`, puis
**Déployer → Gérer les déploiements → ✏️ modifier → Version : Nouvelle version → Déployer**.
L'URL reste la même : rien à changer dans `site-data.js`.

## Au quotidien
- **Suivre les demandes** : application Google Sheets sur le téléphone. La colonne **Statut**
  sert à noter « Appelé », « Confirmé », « Annulé », « Payé »…
- **Trier / filtrer** : Données → Créer un filtre (par date souhaitée, créneau, séance…).
- **Places restantes des formations** : quand une place est confirmée, diminuez `placesRestantes`
  de la formation dans `site-data.js`. À 0, le site affiche « Complet ».
