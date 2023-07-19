---
notes: |
  Let's write some notes!
---

# use that plugin

```js
//...

import emojiJar from './rollup-plugin-emoji-jar.mjs';

export default {
  plugins: [
    emojiJar(),

    //...

    addon.publicEntrypoints(['components/**/*.js', 'index.js']),
    addon.appReexports(['components/**/*.js']),
    addon.hbs(),
  ],
};
```

