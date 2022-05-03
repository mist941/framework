import {NXComponent} from "../framework";

class AppComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: "app-root",
  template: `
  <div>
    <h4>Working!</h4>
  </div>
  `,
});