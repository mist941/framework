interface IComponent {
  render(): void;
}

export interface ComponentConstructor {
  selector: string;
  template: string;
}

export abstract class Component implements IComponent {
  private readonly template: string;
  public readonly selector: string;
  private element: HTMLElement;

  protected constructor(config: ComponentConstructor) {
    this.template = config.template;
    this.selector = config.selector;
  }

  render() {
    this.element = document.querySelector(this.selector);

    if (!this.element) throw new Error(`Element with ${this.selector} not found`);

    this.element.innerHTML = this.template;
  }
}