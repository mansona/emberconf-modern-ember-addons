---
notes: |
  Let's write some notes!
---

# ember-test-selectors

```html
<article>
  <h1 data-test-post-title data-test-resource-id={{post.id}}>{{post.title}}</h1>
  <p>{{post.body}}</p>
  <button data-test-like-button>Like</button>
</article>
```

```js
assert.dom('[data-test-post-title]').hasText('Ember is great!');

await click('[data-test-like-button]');
```
