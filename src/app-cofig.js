module.exports = appConfig;

function appConfig() {
  return {
    us: 'api-agora-stage-103.stage.veracode.io',
    eu: 'api.veracode.eu',
    policyUri: '/appsec/v1/policies',
    applicationUri: '/appsec/v1/applications',
    findingsUri: '/appsec/v2/applications',
    teamsUri: '/api/authn/v2/teams',
    pollingInterval: 30000,
    moduleSelectionTimeout: 60000,
  };
}
