---
notes: |
  Let's write some notes!
---

# explicit import

```js
import FaceComponent from 'modern-ember-addon-example/components/face';

module('Integration | Component | face', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('faceComponent', FaceComponent);

    await render(hbs`<this.faceComponent />`);
    assert.dom(this.element).hasText('I\'m in the face component');

    // Template block usage:
    await render(hbs`
      <this.faceComponent>
        template block text
      </this.faceComponent>
    `);
    assert.dom(this.element).containsText('template block text');
  });
});

```
