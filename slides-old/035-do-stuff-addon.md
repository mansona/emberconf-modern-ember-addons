---
notes: |
  then there is another class of addons that can *do stuff*. That may seem like a wide category, but it is currently as wide as you can imagine. Since I am a big JAM stack guy one of the “do stuff” addons that I use regularly is prember. This runs at the end of your build and builds a static copy of your pages (at least the ones that you have told it about). As you can imagine a category as wide as “do stuff” can be very very large, but you can take a look at the “build system” section on Ember Observer if you want to see some examples
---

# ember-assign-polyfill

```js
  included() {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    const checker = new VersionChecker(this);
    const emberVersion = checker.forEmber();

    if (emberVersion.lt('2.5.0')) {
      this.import('vendor/ember-assign-polyfill/index.js');
    } else if (this.parent === this.project && !hasBeenWarned) {
      console.warn(
        'ember-assign-polyfill is not required for Ember 2.5.0 and later, please remove from your `package.json`.'
      );
      hasBeenWarned = true;
    }
  },
```
