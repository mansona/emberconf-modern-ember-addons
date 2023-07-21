---
notes: |
  Let's write some notes!
---

# use that unplugin in embroider



```js

import { webpackPlugin as emojiJar } from './rollup-plugin-emoji-jar.mjs';

const { Webpack } = require('@embroider/webpack');
return require('@embroider/compat').compatBuild(app, Webpack, {
  packagerOptions: {
     webpackConfig: {
      plugins: [
        emojiJar({ files: ['face'] }),
      ],
    }
  }
});
```
