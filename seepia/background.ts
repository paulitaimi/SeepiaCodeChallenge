import { Application } from "pixi.js";

export function createBackground() {

  const app = new Application();

  app.init({ background: '0x3498db', resizeTo: window });

}
