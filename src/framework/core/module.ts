import {Component} from "./component";
import {router} from "../tools/router";

interface IModule {
  start: () => void;
  initComponent: () => void;
  initRoutes: () => void;
}

interface IRoute {
  path: string;
  component: Component;
}

interface ModuleConstructor {
  components: Array<Component>;
  bootstrap: Component;
  routes?: Array<IRoute>
}

export abstract class Module implements IModule {
  private components: Array<Component>;
  private bootstrapComponent: Component;
  private routes: Array<IRoute>;

  protected constructor(config: ModuleConstructor) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponent();
    if (this.routes?.length) {
      this.initRoutes();
      this.renderRouteContent();
    }
  }

  initComponent() {
    this.bootstrapComponent.render();
    this.components.forEach(component => component.render());
  }

  initRoutes() {
    window.addEventListener("hashchange", this.renderRouteContent.bind(this));
  }

  renderRouteContent() {
    const hash = router.getHash();
    let route = this.routes.find(route => route.path === hash);

    if (!route) route = this.routes.find(route => route.path === "**");

    document.querySelector("main-router").innerHTML = `
        <${route.component.selector}></${route.component.selector}>
      `;
    route.component.render();
  }

}