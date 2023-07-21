---
notes: |
  Let's write some notes!
---

# wrap our plugin

```js
import { createUnplugin } from 'unplugin'

export const unplugin = createUnplugin(({ files = [] }) => {
  return {
    name: PLUGIN_NAME, 
    async transform(code, id) {
      // same code as before
    },
  };
});

export const vitePlugin = unplugin.vite;
export const rollupPlugin = unplugin.rollup;
export const webpackPlugin = unplugin.webpack;
export const rspackPlugin = unplugin.rspack;
export const esbuildPlugin = unplugin.esbuild;
```
