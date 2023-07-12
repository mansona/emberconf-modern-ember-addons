---
notes: |
  Let's write some notes!
---

# ember-test-selectors

```js
included(appOrParent) {
  this._super.included.apply(this, arguments);

  let host = this._findHost();
  this._assignOptions(host);
  this._setupPreprocessorRegistry(appOrParent.registry);

  if (this._stripTestSelectors && !this._registeredWithBabel) {
    let checker = new VersionChecker(this.parent).for('ember-cli-babel', 'npm');

    appOrParent.options = appOrParent.options || {};

    if (checker.satisfies('^6.0.0-beta.1') || checker.satisfies('^7.0.0')) {
      appOrParent.options.babel6.plugins.push(
        require.resolve('./strip-data-test-properties-plugin6')
      );
    }

    this._registeredWithBabel = true;
  }
},
```
