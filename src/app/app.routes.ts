import {homePageComponent} from "./pages/home-page.component";
import {vuePageComponent} from "./pages/vue-page.component";
import {reactPageComponent} from "./pages/react-page.component";
import {angularPageComponent} from "./pages/angular-page.component";
import {notFoundPageComponent} from "./pages/not-found-page.component";

export const appRoutes = [
  {path: "", component: homePageComponent},
  {path: "vue", component: vuePageComponent},
  {path: "react", component: reactPageComponent},
  {path: "angular", component: angularPageComponent},
  {path: "**", component: notFoundPageComponent}
];