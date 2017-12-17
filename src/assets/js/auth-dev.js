$(function () {
  let pgDomain = 'http://localhost';
  $('#auth-form').prop('action', pgDomain + '/api/process-login');
});