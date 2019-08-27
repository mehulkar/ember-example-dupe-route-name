import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  // Last one defined wins, for transitionTo. Doesn't seem to matter for visit()
  this.route('foo', { path:  '/foo/:id' });
  this.route('foo', { path:  '/foo/:title/:id' });
});

export default Router;
