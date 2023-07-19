---
notes: |
  Let's write some notes!
---

# how do we fix this?

```js
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | face', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Face />`);
    assert.dom(this.element).hasText('');

    await render(hbs`
      <Face>
        template block text
      </Face>
    `);
    assert.dom(this.element).hasText('template block text');
  });
});
```
