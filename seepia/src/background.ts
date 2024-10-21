import * as PIXI from "pixi.js";

export function createBackground() {

const app = new PIXI.Application();
app
  .init({ background: "#1099bb", resizeTo: window, hello: true })
  .then(() => {
    const canvas = app.canvas;
    canvas.classList.add('pixi'); 
    document.body.appendChild(canvas);
  });

}