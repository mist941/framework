import {NXComponent} from "../../framework";

class ReactPageComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const reactPageComponent = new ReactPageComponent({
  selector: "react_page",
  template: `
  <main>
    React Page
  </main>
  `,
});