'use strict';

module.exports = function (environment) {
  let ENV = {
    locationType: 'preserve-hash',
  };

  return ENV;
};

// turn off image fingerprinting
module.exports['ember-cli-build'] = {
  fingerprint: {
    extensions: ['js', 'css', 'map']
  }
}
