---
notes: |
  then there is another class of addons that can *do stuff*. That may seem like a wide category, but it is currently as wide as you can imagine. Since I am a big JAM stack guy one of the “do stuff” addons that I use regularly is prember. This runs at the end of your build and builds a static copy of your pages (at least the ones that you have told it about). As you can imagine a category as wide as “do stuff” can be very very large, but you can take a look at the “build system” section on Ember Observer if you want to see some examples
---

# Embroider Macros

https://www.npmjs.com/package/@embroider/macros



```js
import { macroCondition, dependencySatisfies, importSync } from '@embroider/macros';

if (macroCondition(dependencySatisfies('ember-qunit', '*'))) {
  return importSync('ember-qunit');
} else if (macroCondition(dependencySatisfies('ember-mocha', '*'))) {
  return importSync('ember-mocha');
}
```
