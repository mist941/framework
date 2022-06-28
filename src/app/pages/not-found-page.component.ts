import {NXComponent} from "../../framework";

class NotFoundPageComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const notFoundPageComponent = new NotFoundPageComponent({
  selector: "not-found_page",
  template: `
  <main>
    <div class="row">
      <div class="col s12">
        <div class="card-panel red darken-1">
          <span class="white-text">
            Page not found
          </span>
        </div>
      </div>
    </div>
  </main>
  `,
});