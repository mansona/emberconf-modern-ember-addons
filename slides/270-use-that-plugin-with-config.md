---
notes: |
  Let's write some notes!
---

# use that plugin with config

```js
//...

import emojiJar from './rollup-plugin-emoji-jar.mjs';

export default {
  plugins: [
    emojiJar({files: ['face']}),

    //...

    addon.publicEntrypoints(['components/**/*.js', 'index.js']),
    addon.appReexports(['components/**/*.js']),
    addon.hbs(),
  ],
};
```

