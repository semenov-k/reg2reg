const JSDomEnvironment = require('jest-environment-jsdom');

module.exports = class TestEnvironment extends JSDomEnvironment {
  async setup() {
      await super.setup();
      if (typeof this.global.TextEncoder === 'undefined') {
        const { TextEncoder } = require('util');
        this.global.TextEncoder = TextEncoder;
    }
  }
}