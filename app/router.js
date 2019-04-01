import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('skills');
    this.route('portfolio');
    this.route('experience');
    this.route('education');
});

export default Router;
