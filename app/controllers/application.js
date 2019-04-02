import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { getOwner } from "@ember/application";

export default Controller.extend({
  router: service(),
  actions: {
    routeToPageDown() {
      const currentRoute = getOwner(this).lookup("controller:application")
        .currentPath;

      switch (currentRoute) {
        case "index":
          this.get("router").transitionTo("skills");
          break;

        case "skills":
          this.get("router").transitionTo("portfolio");
          break;

        case "portfolio":
          this.get("router").transitionTo("education");
          break;

        case "education":
          this.get("router").transitionTo("index");
          break;
      }
    },
    routeToPageUp() {
      const currentRoute = getOwner(this).lookup("controller:application")
        .currentPath;

      switch (currentRoute) {
        case "index":
          this.get("router").transitionTo("education");
          break;

        case "skills":
          this.get("router").transitionTo("index");
          break;

        case "portfolio":
          this.get("router").transitionTo("skills");
          break;

        case "education":
          this.get("router").transitionTo("portfolio");
          break;
      }
    }
  }
});
