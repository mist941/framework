import {NXComponent} from "../framework";

class AppComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <main-router></main-router>
  `,
});