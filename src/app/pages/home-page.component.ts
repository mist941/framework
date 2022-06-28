import {NXComponent} from "../../framework";

class HomePageComponent extends NXComponent {
  constructor(config) {
    super(config);
  }
}

export const homePageComponent = new HomePageComponent({
  selector: "home_page",
  template: `
  <main>
    <div class="row">
      <div class="col s12">
        <div class="card-panel blue darken-3">
          <span class="white-text">
            In computer programming, a software framework is an abstraction in which software, providing generic functionality, can be selectively changed by additional user-written code, thus providing application-specific software. It provides a standard way to build and deploy applications and is a universal, reusable software environment that provides particular functionality as part of a larger software platform to facilitate the development of software applications, products and solutions. Software frameworks may include support programs, compilers, code libraries, toolsets, and application programming interfaces (APIs) that bring together all the different components to enable development of a project or system.
          </span>
        </div>
      </div>
    </div>
  </main>
  `,
});