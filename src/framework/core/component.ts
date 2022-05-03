interface IComponent {
  render(): void;
}

export interface ComponentConstructor {
  selector: string;
  template: string;
}

export abstract class Component implements IComponent {
  private readonly template: string;
  private readonly selector: string;

  protected constructor(config: ComponentConstructor) {
    this.template = config.template;
    this.selector = config.selector;
  }

  render() {
    document.querySelector(this.selector).innerHTML = this.template;
  }
}