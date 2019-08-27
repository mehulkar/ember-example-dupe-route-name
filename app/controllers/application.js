import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class ApplicationController extends Controller {
  @service router;

  transitionRouteWithTitle() {
    this.router.transitionTo('/foo/bar/1');
  }

  transitionRouteWithoutTitle() {
    this.router.transitionTo('/foo/2');
  }

  visitRouteWithTitle() {
    getOwner(this).visit('/foo/bar/3');
  }

  visitRouteWithoutTitle() {
    getOwner(this).visit('/foo/4');
  }
}
