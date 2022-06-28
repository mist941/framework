import {NXComponent} from "../../framework";

class AngularPageComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const angularPageComponent = new AngularPageComponent({
  selector: "angular_page",
  template: `
  <main>
    Angular Page
  </main>
  `,
});