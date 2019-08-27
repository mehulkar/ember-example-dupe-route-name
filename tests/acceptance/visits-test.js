import { module, test } from 'qunit';
import { visit, currentRouteName, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visits', function(hooks) {
  setupApplicationTest(hooks);

  module('direct visit', () => {
    test('direct visit: first declared', async function(assert) {
      await visit('/foo/5');
      assert.equal(currentURL(), '/foo/5', 'works');
    });

    test('direct visit: last declared', async function(assert) {
      await visit('/foo/bar/6');
      assert.equal(currentURL(), '/foo/bar/6', 'works');
    });
  });

  module('router.transitionTo', () => {
    test('transitionTo: last declared', async function(assert) {
      await visit('/');
      await click('[data-test-transition-with-title]');
      assert.equal(currentURL(), '/foo/bar/1', 'works');
    });

    test('transitionTo: through last declared', async function(assert) {
      await visit('/');
      await click('[data-test-transition-with-title]');
      await click('[data-test-transition-without-title]');
      assert.equal(currentRouteName(), 'foo', 'new route is rendered');
      assert.equal(currentURL(), '/foo/2', 'transition fails');
    });

    test('transitionTo: first declared', async function(assert) {
      await visit('/');
      await click('[data-test-transition-without-title]');
      assert.equal(currentURL(), '/foo/2', 'transition fails');
    });
  });

  module('appInstance.visit()', () => {
    test('visit: first declared', async function(assert) {
      await visit('/');
      await click('[data-test-visit-without-title]');
      assert.equal(currentURL(), '/foo/4', 'works');
    });

    test('visit: last declared', async function(assert) {
      await visit('/');
      await click('[data-test-visit-with-title]');
      assert.equal(currentURL(), '/foo/bar/3', 'works');
    });
  });
});
