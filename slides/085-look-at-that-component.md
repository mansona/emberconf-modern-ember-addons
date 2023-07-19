---
notes: |
  Let's write some notes!
---

# look at that component

```js
// modern-ember-addon-example/dist/components/face.js

import { setComponentTemplate } from '@ember/component';
import { precompileTemplate } from '@ember/template-compilation';
import templateOnly from '@ember/component/template-only';

var TEMPLATE = precompileTemplate("<h1>I\'m in the face component</h1>\n\n{{outlet}}");

var face = setComponentTemplate(TEMPLATE, templateOnly());

export { face as default };
//# sourceMappingURL=face.js.map
```
