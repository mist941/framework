import {Component} from "./component";

interface IModule {
  start: () => void;
  initComponent: () => void;
}

interface ModuleConstructor {
  components: Array<Component>
}

export abstract class Module implements IModule {
  private components: Array<Component>;

  protected constructor(config: ModuleConstructor) {
    this.components = config.components;
  }

  start() {
    this.initComponent();
  }

  initComponent() {
    this.components.forEach(component => component.render());
  }
}