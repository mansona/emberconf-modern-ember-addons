---
notes: |
  Let's write some notes!
---

# rollup.config.mjs

```js

//...

export default {
  plugins: [
    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints(['components/**/*.js', 'index.js']),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    // addon.appReexports(['components/**/*.js']),

    // Ensure that standalone .hbs files are properly integrated as Javascript.
    addon.hbs(),

    //...
  ],
};
```
