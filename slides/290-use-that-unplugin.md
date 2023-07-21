---
notes: |
  Let's write some notes!
---

# use that unplugin

```js
//...

import { rollupPlugin as emojiJar } from './rollup-plugin-emoji-jar.mjs';

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
