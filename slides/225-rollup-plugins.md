---
notes: |
  Let's write some notes!
---

# rollup plugins

```js

//...

export default {
  plugins: [
    addon.publicEntrypoints(['components/**/*.js', 'index.js']),
    addon.appReexports(['components/**/*.js']),
    addon.hbs(),

    // TODO - our wonderful plugin
  ],
};
```
