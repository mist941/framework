import {NXComponent} from "../../framework";

class HeaderComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const headerComponent = new HeaderComponent({
  selector: "app-header",
  template: `
  <nav>
    <div class="nav-wrapper blue lighten-1 header">
      <a href="#" class="brand-logo">JS</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#vue">Vue</a></li>
        <li><a href="#react">React</a></li>
        <li><a href="#angular">Angular</a></li>
      </ul>
    </div>
  </nav>
  `,
});