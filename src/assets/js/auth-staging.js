$(function () {
  let pgDomain = 'http://mynt-staging.manila.exist.com';
  $('#auth-form').prop('action', pgDomain + '/api/process-login');
});