/**
 * PÔLE ASSALA — réception des rendez-vous et des inscriptions aux formations
 *
 * À coller dans Google Sheets > Extensions > Apps Script.
 * Voir FORMATIONS-SETUP.md pour la marche à suivre complète.
 *
 * Deux onglets sont créés automatiquement dans la feuille :
 *   « Rendez-vous »   — le formulaire « Réservez en une minute » de l'accueil
 *   « Inscriptions »  — les inscriptions aux formations
 */

// Optionnel : recevoir un e-mail à chaque nouvelle demande.
// Mettez votre adresse entre les guillemets, ou laissez vide pour désactiver.
const NOTIFY_EMAIL = '';

const TABS = {
  rdv: {
    name: 'Rendez-vous',
    headers: ['Date de la demande', 'Nom', 'Téléphone', 'Vous êtes', 'Séance',
              'Date souhaitée', 'Créneau', 'Statut'],
    required: ['nom', 'telephone', 'seance'],
    row: d => [new Date(), d.nom, d.telephone, d.sexe, d.seance, d.date, d.creneau, 'Nouveau'],
    subject: d => 'Nouveau rendez-vous — ' + d.seance,
    body: d =>
      'Nom : ' + d.nom + '\n' +
      'Téléphone : ' + d.telephone + '\n' +
      'Vous êtes : ' + (d.sexe || '—') + '\n' +
      'Séance : ' + d.seance + '\n' +
      'Date souhaitée : ' + (d.date || '—') + '\n' +
      'Créneau : ' + (d.creneau || '—')
  },
  formation: {
    name: 'Inscriptions',
    headers: ['Date d\'inscription', 'Formation', 'Session', 'Nom', 'Téléphone',
              'E-mail', 'Profession', 'Message', 'ID formation', 'Statut'],
    required: ['nom', 'telephone', 'formation'],
    row: d => [new Date(), d.formation, d.session, d.nom, d.telephone,
               d.email, d.profession, d.message, d.formationId, 'Nouveau'],
    subject: d => 'Nouvelle inscription — ' + d.formation,
    body: d =>
      'Formation : ' + d.formation + ' (' + (d.session || '') + ')\n' +
      'Nom : ' + d.nom + '\n' +
      'Téléphone : ' + d.telephone + '\n' +
      'E-mail : ' + (d.email || '—') + '\n' +
      'Profession : ' + (d.profession || '—') + '\n' +
      'Message : ' + (d.message || '—')
  }
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents || '{}');

    // Anti-spam : champ invisible rempli = robot
    if (d.website) return json_({ ok: true });

    // Les envois sans « type » viennent de la page Formations
    const tab = TABS[d.type] || TABS.formation;
    for (const k of tab.required) {
      if (!d[k]) return json_({ ok: false, error: 'missing ' + k });
    }

    getSheet_(tab).appendRow(tab.row(d).map(clean_));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, tab.subject(d),
        tab.body(d) + '\n\nVoir la feuille : ' + SpreadsheetApp.getActiveSpreadsheet().getUrl());
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Permet de vérifier que l'URL fonctionne en l'ouvrant dans le navigateur.
function doGet() {
  return json_({ ok: true, service: 'Rendez-vous & formations — Pôle Assala' });
}

function getSheet_(tab) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(tab.name);
  if (!sheet) sheet = ss.insertSheet(tab.name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(tab.headers);
    sheet.getRange(1, 1, 1, tab.headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Limite la longueur et empêche qu'une valeur soit interprétée comme une formule.
function clean_(v) {
  if (v instanceof Date) return v;
  let s = String(v == null ? '' : v).slice(0, 1000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
