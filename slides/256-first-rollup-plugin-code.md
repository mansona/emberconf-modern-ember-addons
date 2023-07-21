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
    name: PLUGIN_NAME,
    async transform(code, id) {
      return process(code);
    },
  };
}

function process(fileContents) {
  // const replace = { ':hello:': '👋' };

  let replacement = fileContents.replaceAll(':hello:', '👋');

  return replacement;
}
```
