import {NXModule} from "../framework";
import {appComponent} from "./app.component";

class AppModule extends NXModule {
  constructor(config) {
    super(config);
  }

}

export const appModule = new AppModule({
  components: [
    appComponent
  ]
});