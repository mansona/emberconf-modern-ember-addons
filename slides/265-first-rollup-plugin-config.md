---
notes: |
  Let's write some notes!
---

# Let's configure it! 🧑‍🔬

```js
// modern-ember-addon-example/rollup-plugin-emoji-jar.mjs
const PLUGIN_NAME = 'ember-emoji-jar';

export default function emojiJar({ files = [] } = {}) {
  return {
    name: PLUGIN_NAME, // this name will show up in logs and errors
    async transform(code, id) {
      if(!files) {
        // do some transforming 🤖
        return; 
      }
      // this is not a great implementation - just for the demo
      if (files.some((extension) => id.includes(extension))) {
        // do some transforming 🤖
      }

      // returning nothing means it doens't transform
    },
  };
}
```
