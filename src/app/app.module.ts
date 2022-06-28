import {NXModule} from "../framework";
import {appComponent} from "./app.component";
import {headerComponent} from "./common/header.component";
import {appRoutes} from "./app.routes";

class AppModule extends NXModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [
    headerComponent
  ],
  bootstrap: appComponent,
  routes: appRoutes
});