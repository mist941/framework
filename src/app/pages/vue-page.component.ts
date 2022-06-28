import {NXComponent} from "../../framework";

class VuePageComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const vuePageComponent = new VuePageComponent({
  selector: "vue_page",
  template: `
  <main>
    Vue Page
  </main>
  `,
});