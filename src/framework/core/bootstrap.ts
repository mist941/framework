import {Module} from "./module";

export function bootstrap(module: Module) {
  module.start();
}