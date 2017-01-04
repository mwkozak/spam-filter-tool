var clientId = '656131812915-v80ae8csklbllai95jrslkc99p92qbj2.apps.googleusercontent.com';
var apiKey = 'AIzaSyAPzhOgSJ-zjvCP4E4D_qRbeihPJvU1ZoY';
var scopes = 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/analytics.manage.users.readonly https://www.googleapis.com/auth/analytics.edit';

function handleClientLoad() {
  var initButton = document.getElementById('init');
  initButton.onclick = function() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
  }
}

function checkAuth() {
  gapi.auth.authorize({
    client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
}

function handleAuthResult(authResult) {
  if (authResult) {
    gapi.client.load('analytics', 'v3', spamFilter.initialize);
  } else {
    spamFilter.showError({
      'reason' : {
        'result' : {
          'error' : {
            'message' : 'Authentication failed.'
          }
        }
      }
    });
  }
}
