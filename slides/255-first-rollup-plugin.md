---
notes: |
  Let's write some notes!
---

# Let's build it! 💪

```js
// modern-ember-addon-example/rollup-plugin-emoji-jar.mjs

const PLUGIN_NAME = 'ember-emoji-jar';

export default function emojiJar() {
  return {
    name: PLUGIN_NAME, // the name will show up in logs and errors
    async transform(code, id) {
      // do some transforming 🤖
    },
  };
}
```
