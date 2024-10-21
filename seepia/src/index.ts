import { createBackground } from './background';  
import { load3DModel } from './3dModel';         

createBackground();

setTimeout(() => {
  load3DModel();
}, 100);  
